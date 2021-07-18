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
      if (AuthManager.instance().isLoggedIn()) {
        config.headers.Authorization = `bearer ${AuthManager.instance().getToken()}`; // Let each request carry a custom token. Please modify according to the actual situation
      }
      Object.assign(config.headers, {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      });
      return config;
    }, (error) => {
      // Do something with request error
      console.error('Request | ', error.request); // for debug
      return { error: error.request };
    });
  }
}
