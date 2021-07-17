import { BackendRestService } from '../services/backend.rest.service';
import { Engine } from '../../engine/core/engine';

export class BaseRemoteModel {
  /** @property Object attributes**/
  attributes;
  /** @property Object responseData**/
  responseData;

  /** @abstract Abstarct method should return api url*/
  getApiUrl() {
    return null;
  }

  getRequestOptions() {
    return {
      url: this.getApiUrl(),
      method: 'get',
    };
  }

  /** Loading data from remote instance**/
  async load() {
    this.responseData = await BackendRestService.instance().data(this.getRequestOptions());
    this.attributes = this.responseData.contents;
    return this;
  }

  /** convert attributes to pojo*/
  toPojo() {
    return Engine.clone(this.attributes);
  }

  /**
   *  @param name string
   *  @param value any
   *  */
  setAttribute(name, value) {
    this.attributes[name] = value;
  }

  getAttribute(name) {
    return this.attributes[name];
  }

  getAttributes() {
    return this.attributes;
  }

  getResponseData() {
    return this.responseData;
  }
}
