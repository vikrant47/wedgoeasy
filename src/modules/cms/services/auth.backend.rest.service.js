import { BackendRestService } from './backend.rest.service';
import { AuthManager } from './auth.manager';

export class AuthBackendRestService extends BackendRestService {
  static _instance = new AuthBackendRestService();

  static instance() {
    return this._instance;
  }

  interceptRequest() {
    this.axiosInstance.interceptors.request.use((config) => {
      console.debug('Backend Request | ', config.url, config.headers, config.method, config.data);
      Object.assign(config.headers, {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `bearer ${AuthManager.instance().getToken()}`,
      });
      return config;
    }, (error) => {
      // Do something with request error
      console.error('Request | ', error.request); // for debug
      return { error: error.request };
    });
  }
}
