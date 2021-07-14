import getConfig from 'next/config';
import {RestService} from './rest.service';
import {AuthManager} from './auth.manager';
import {Notification} from "../models/notification";
import {NavigationManager} from "./navigation.manager";
import service from "../../../lib/request";

const {publicRuntimeConfig} = getConfig();
const authManager = AuthManager.instance();

export class FrontendRestService extends RestService {
  static _instance = new FrontendRestService();

  static instance() {
    return this._instance;
  }

  getRequestTimeout() {
    return publicRuntimeConfig.REQUEST_TIMEOUT;
  }

  getBaseUrl() {
    return '';
  }

  init() {
    this.interceptRequest();
    this.interceptResponse();
  }

  interceptRequest() {
    this.axiosInstance.interceptors.request.use((config) => {
      console.debug('Frontend Request | ', config.url, config.headers, config.method, config.data);
      if (authManager.getToken()) {
        config.headers.Authorization = authManager.getToken(); // Let each request carry a custom token. Please modify according to the actual situation
      }
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
        console.debug('Frontend Response | ', response.status);
        const code = response.status;
        if (code < 200 || code > 300) {
          Notification.instance().error({
            title: response.message
          });
          throw new Error(`Invalid response ${code}`);
        }
        return response.data;
      }, (error) => {
        console.error('Frontend Response | ', error.response); // for debug
        let code = 0;
        try {
          code = error.response.data.status;
        } catch (e) {
          if (error.toString().indexOf('Error: timeout') !== -1) {
            Notification.instance().error({
              title: 'Network request timed out',
              duration: 5000
            });
            return Promise.reject(error);
          }
        }
        if (code) {
          if (code === 401) {
            Notification.instance().error({
              title: 'Unauthorized Access',
              duration: 5000
            });
            // CmsRoute.navigate(publicRuntimeConfig.LOGIN_PAGE);
          } else if (code === 403) {
            NavigationManager.navigate(publicRuntimeConfig.UNAUTHOROZED_PAGE);
          } else {
            const errorMsg = error.response.data.message;
            if (errorMsg !== undefined) {
              Notification.instance().error({
                title: errorMsg,
                duration: 5000
              });
              NavigationManager.navigate(publicRuntimeConfig.ERROR_PAGE);
            }
          }
        } else {
          Notification.instance().error({
            title: 'Request failed',
            duration: 5000
          });
        }
        return Promise.reject(error);
      }
    );
  }
}
