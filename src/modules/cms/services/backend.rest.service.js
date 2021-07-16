import { RestService } from './rest.service';

export class BackendRestService extends RestService {
  static _instance = new BackendRestService();

  static instance() {
    return this._instance;
  }

  init() {
    this.interceptRequest();
    this.interceptResponse();
  }

  getRequestTimeout() {
    return process.env.REQUEST_TIMEOUT * 1;
  }

  interceptRequest() {
    this.axiosInstance.interceptors.request.use((config) => {
      console.debug('Backend Request | ', config.url, config.headers, config.method, config.data);
      Object.assign(config.headers, {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      });
      return config;
    }, (error) => {
      // Do something with request error
      console.error('Request | ', error.request); // for debug
      Promise.reject(error);
    });
  }

  interceptResponse() {
    this.axiosInstance.interceptors.response.use((response) => {
      console.debug('Backend Response | ', response.status);
      return response;
    }, (error) => {
      console.error('Backend Response | ', error.response); // for debug
      return error.response;
    }
    );
  }
  getBaseUrl() {
    return 'http://localhost:8080';
  }
}
