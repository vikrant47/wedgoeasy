import * as _ from 'lodash';
import { MongoParser } from './mongo.parser';
import { RestService } from '../../cms/services/rest.service';
import { BackendRestService } from '../../cms/services/backend.rest.service';

export class RestQuery {
  static mongoParser = new MongoParser();

  static toQueryBuilderRules(query) {
    const clonedQuery = JSON.parse(JSON.stringify(query));
    let mongoQuery = clonedQuery.where;
    if (!_.isEmpty(mongoQuery)) {
      if (!mongoQuery.$and && !mongoQuery.$or) {
        const conditions = [];
        // eslint-disable-next-line no-restricted-syntax
        for (const key in mongoQuery) {
          conditions.push({ [key]: mongoQuery[key] });
        }
        mongoQuery = { $and: conditions };
      }
      clonedQuery.where = this.mongoParser.getRulesFromMongo(mongoQuery);
    }
    if (clonedQuery.normalizedWhere) {
      if (!_.isEmpty(clonedQuery.where)) {
        clonedQuery.where.rules.push(clonedQuery.normalizedWhere);
      } else {
        clonedQuery.where = clonedQuery.normalizedWhere;
      }
      delete clonedQuery.normalizedWhere;
    }
    if (clonedQuery.include && clonedQuery.include.length > 0) {
      clonedQuery.include = clonedQuery.include.map((query) => this.toQueryBuilderRules(query));
    }
    return clonedQuery;
  }

  /**
   * This will merge given condition array and return a single condition
   * Note: queries should be mongo condition
   * @return Object
   */
  static merge(queries) {
    const _this = this;
    return queries.slice(1).reduce((query, next) => {
      if (next.modelAlias !== query.modelAlias) {
        throw new Error(`Can not merge querries of different modelAliass "${query.modelAlias}" != "${next.modelAlias}"`);
      }
      /** initializing where*/
      let { where } = query;
      if (!where || Object.keys(where).length === 0) {
        where = { $and: [] };
      } else if (!where.$and) {
        where = { $and: [where] };
      }
      query.where = where;
      /** merging include queries*/
      if (next.include) {
        if (!query.include) {
          query.include = [];
        }
        // eslint-disable-next-line no-restricted-syntax
        for (const include of next.include) {
          const index = query.include.findIndex(qinclude => qinclude.modelAlias === include.modelAlias);
          if (index > -1) {
            _this.merge(query.include[index], include);
          } else {
            query.include.push(include);
          }
        }
        delete next.include;
      }
      if (next.where && Object.keys(where).length > 0) {
        query.where.$and.push(next.where);
      }
      return query;
    }, queries[0]);
  }

  constructor(modelAlias) {
    this.modelAlias = modelAlias;
  }

  findOne(query) {
    return this.execute({
      params: {
        query,
        queryMethod: 'findOne'
      }
    });
  }

  findById(id, options = {}) {
    return this.execute({
      method: 'get',
      params: {
        query: { ...options, where: { id }}, queryMethod: 'findOne'
      }
    });
  }

  paginate(query) {
    return this.execute({ method: 'get', params: { query, queryMethod: 'paginate' }});
  }

  findAll(query) {
    return this.execute({ method: 'get', params: { query, queryMethod: 'findAll' }});
  }

  create(data) {
    return this.execute({
      method: 'post',
      data: {
        queryMethod: 'create',
        data
      }
    });
  }

  update(data, query, ajaxOptions) {
    return this.execute({
      method: 'put',
      data: {
        queryMethod: 'update',
        query,
        data
      }
    });
  }

  delete(query, ajaxOptions) {
    return this.execute({
      method: 'delete',
      data: {
        queryMethod: 'delete',
        query
      }
    });
  }

  async execute(options) {
    const data = options.data || {};
    const params = options.params || {};
    if (options.method.toLowerCase() === 'get' && params.query) {
      params.query = RestQuery.toQueryBuilderRules(params.query);
    } else if (data.query) {
      data.query = RestQuery.toQueryBuilderRules(data.query);
    }
    // data.modelAlias = this.modelAlias.replaceAll('.', '\\');
    const response = await RestService.request({
      url: `/api/engine/models/${this.modelAlias}/query`,
      queryMethod: options.method, ...options
    });
    return response.data;
  }

  request() {
    return BackendRestService.request.apply(RestService, arguments);
  }
}
