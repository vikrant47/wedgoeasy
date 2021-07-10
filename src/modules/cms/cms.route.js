import {RestQuery} from "../engine/services/rest.query";
import {TenantService} from "../engine/services/tenant.service";

export class CmsRoute {
  static PAGE_API_PATH = '/api/cms/pages/data';
  route;
  pageData;

  constructor(route) {
    this.route = route;
  }

  async loadPageData() {
    this.pageData = await TenantService.request({
      url: CmsRoute.PAGE_API_PATH +'/'+ this.route,
      method: 'get'
    });
    return this;
  }
}
