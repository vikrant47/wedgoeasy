import {BaseRemoteModel} from './base.remote.model';

export class CmsPage extends BaseRemoteModel {
  static API_PATH = `/api/cms/websites${process.env.WEBSITE_FURL}/pages`;
  route;

  constructor(route) {
    super();
    this.route = route;
  }

  getRequestOptions() {
    return {
      url: `${CmsPage.API_PATH}?route=${this.route}`,
      method: 'get',
    };
  }
}
