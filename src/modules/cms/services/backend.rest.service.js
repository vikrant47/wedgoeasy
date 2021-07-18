import { RestService } from './rest.service';
import { NotificationService } from './notification.service';

export class BackendRestService extends RestService {
  static _instance = new BackendRestService();

  static instance() {
    return this._instance;
  }

  /** @return BackendRestService*/
  withAuth() {
    return require('./auth.backend.rest.service').AuthBackendRestService.instance();
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
      return { error: error.request };
    });
  }

  interceptResponse() {
    this.axiosInstance.interceptors.response.use((response) => {
      console.debug('Backend Response | ', response.status);
      const code = response.status;
      if (code < 200 || code > 300) {
        NotificationService.instance().error({ message: response.message });
        return { error: response };
      }
      return response;
    }, (error) => {
      console.error('Backend Response | ', error.response); // for debug
      let status = 0;
      try {
        status = error.response.data.status;
      } catch (e) {
        if (error.toString().indexOf('Error: timeout') !== -1) {
          NotificationService.instance().error({
            message: 'Network request timed out',
            duration: 5000
          });
        }
      }
      return { error: error.response };
    }
    );
  }

  getBaseUrl() {
    return 'http://localhost:8080';
  }
}
