import axios from 'axios';
import {NotificationService} from "../modules/cms/notification.service";

// Create axios instance
const service = axios.create({
    baseURL: process.env.BASE_API, // api 的 base_url
    timeout: process.env.REQUEST_TIMEOUT // Request timeout
});

// request interceptor
service.interceptors.request.use(
    config => {
        /*    if (getToken()) {
              config.headers['Authorization'] = getToken(); // Let each request carry a custom token. Please modify according to the actual situation
            }*/
        Object.assign(config.headers, {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        });
        return config;
    },
    error => {
        // Do something with request error
        console.log(error); // for debug
        Promise.reject(error);
    }
);

// response Interceptor
service.interceptors.response.use(
    response => {
        const code = response.status;
        if (code < 200 || code > 300) {
            Notification.error({
                title: response.message
            });
            return Promise.reject('error');
        } else {
            return response.data;
        }
    },
    error => {
        let code = 0;
        try {
            code = error.response.data.status;
        } catch (e) {
            if (error.toString().indexOf('Error: timeout') !== -1) {
                NotificationService.instance().error({
                    title: 'Network request timed out',
                    duration: 5000
                });
                return Promise.reject(error);
            }
        }
        if (code) {
            if (code === 401) {
                store.dispatch('LogOut').then(() => {
                    // User login interface prompt
                    Cookies.set('point', 401);
                    location.reload();
                });
            } else if (code === 403) {
                router.push({path: '/401'});
            } else {
                const errorMsg = error.response.data.message;
                if (errorMsg !== undefined) {
                    NotificationService.error({
                        title: errorMsg,
                        duration: 5000
                    });
                }
            }
        } else {
            Notification.error({
                title: 'Request failed',
                duration: 5000
            });
        }
        return Promise.reject(error);
    }
);
export default service;
