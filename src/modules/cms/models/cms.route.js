import {RestService} from "../services/rest.service";
import {Engine} from '../../engine/core/engine';
import {BackendRestService} from "../services/backend.rest.service";

export class CmsRoute {
  static PAGE_API_PATH = '/api/cms/pages/data';
  route;
  pageData;

  constructor(route) {
    this.route = route;
  }

  async loadPageData() {
    this.pageData = await BackendRestService.instance().data({
      url: `${CmsRoute.PAGE_API_PATH}/${this.route}`,
      method: 'get'
    });
    return this;
  }

  toPojo() {
    return Engine.clone(this);
  }


}
