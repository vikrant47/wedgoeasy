import { BaseRemoteModel } from './base.remote.model';

export class CmsWebsite extends BaseRemoteModel {
  static API_PATH = `/api/cms/websites${process.env.WEBSITE_FURL}`;
  static _instance = new CmsWebsite();

  static instance() {
    return this._instance;
  }

  getApiUrl() {
    return CmsWebsite.API_PATH;
  }

  async load() {
    if (!this.responseData) {
      await super.load();
    }
  }
}
