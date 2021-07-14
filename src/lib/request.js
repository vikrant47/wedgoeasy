import axios from 'axios';
import getConfig from 'next/config';
import { Notification } from '../modules/cms/models/notification';
import { AuthManager } from '../modules/cms/services/auth.manager';
import { NavigationManager } from '../modules/cms/services/navigation.manager';

const { publicRuntimeConfig } = getConfig();
const authManager = AuthManager.instance();

export class HttpRequest {

}

// Create axios instance
const service = axios.create({
  // baseURL: publicRuntimeConfig.BASE_API, // api 的 base_url
  timeout: publicRuntimeConfig.REQUEST_TIMEOUT // Request timeout
});

// request interceptor
service.interceptors.request.use((config) => {
  console.debug('Request | ', config.url, config.headers, config.method, config.data);
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
}
);

// response Interceptor
service.interceptors.response.use((response) => {
  console.debug('Response | ', response.status);
  const code = response.status;
  if (code < 200 || code > 300) {
    Notification.instance().error({
      title: response.message
    });
    throw new Error(`Invalid response ${code}`);
  }
  return response.data;
}, (error) => {
  console.error('Response | ', error.response); // for debug
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
export default service;
