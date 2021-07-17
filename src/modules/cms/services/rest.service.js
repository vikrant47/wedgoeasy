import axios from 'axios';

export class RestService {
  /** @type axiosInstance AxiosInstance*/
  axiosInstance;
  /** @type instance TenantService*/
  static instance = new RestService();

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: this.getBaseUrl(), // api 的 base_url
      timeout: this.getRequestTimeout() // Request timeout
    });
    this.init();
  }

  init() {

  }

  getRequestTimeout() {
    return process.env.REQUEST_TIMEOUT * 1;
  }

  /** @return RestService*/
  static getInstance() {
    return RestService.instance;
  }

  static request(options) {
    return this.instance.fetch(options);
  }

  addInterceptor(type, interceptor) {
    this.interceptors[type].push(interceptor);
  }

  getBaseUrl() {
    return process.env.BASE_API;
  }

  async data(options) {
    const response = await this.request(options);
    if (!(response instanceof Error)) {
      return response.data;
    }
    return response;
  }

  /** Make request to current tenant*/
  async request(options) {
    options = { ...options };
    options.url = this.getBaseUrl() + options.url;
    const response = await this.axiosInstance(options);
    if (response.error) {
      throw response.error;
    }
    return response;
  }
}

