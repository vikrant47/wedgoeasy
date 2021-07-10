import axios from 'axios';
import {Notification} from '../modules/cms/notification';

// Create axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: process.env.REQUEST_TIMEOUT * 1 // Request timeout
});

// request interceptor
service.interceptors.request.use((config) => {
    console.debug('Request | ', config);
    /*    if (getToken()) {
              config.headers['Authorization'] = getToken(); // Let each request carry a custom token. Please modify according to the actual situation
            }*/
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
    console.debug('Response | ', response);
    const code = response.status;
    if (code < 200 || code > 300) {
      Notification.instance().error({
        title: response.message
      });
      return Promise.reject('error');
    } else {
      return response.data;
    }
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
      } else if (code === 403) {
        // todo
      } else {
        const errorMsg = error.response.data.message;
        if (errorMsg !== undefined) {
          Notification.instance().error({
            title: errorMsg,
            duration: 5000
          });
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
