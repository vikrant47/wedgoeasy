import Cookies from 'js-cookie';
import getConfig from 'next/config';
import { Engine } from '../../engine/core/engine';
import { BackendRestService } from './backend.rest.service';

const { publicRuntimeConfig } = getConfig();
const TokenKey = publicRuntimeConfig.ACCESS_TOKEN_KEY;

export class AuthManager {
  static LOGIN_API = '/api/cms/customers/auth/login';
  static USER_INFO_API = '/api/cms/customers/info';
  static REFRESH_API = '/api/cms/customers/info';
  route;
  auth;
  static _instance = new AuthManager();

  /** @return AuthManager*/
  static instance() {
    return this._instance;
  }

  constructor(route) {
    this.route = route;
  }

  async authenticate(login, password, rememberMe = false) {
    const result = await BackendRestService.instance().data({
      url: `${AuthManager.LOGIN_API}`,
      method: 'POST',
      data: { 'login': login, 'password': password }
    });
    this.auth = result.contents;
    this.setToken(this.auth.access_token, this.auth.expires_in, rememberMe);
    return this;
  }

  logout() {
    this.auth = null;
    this.removeToken();
  }

  async refresh() {
    const result = await BackendRestService.instance().withAuth().data({
      url: `${AuthManager.LOGIN_API}`,
      method: 'POST',
    });
    this.auth = result.contents;
    this.setToken(this.auth.access_token, this.auth.expires_in, rememberMe);
    return this;
  }

  async getUser() {
    if (!this.auth) {
      if (this.isLoggedIn()) {
        this.auth = await BackendRestService.instance().withAuth().data({
          url: `${AuthManager.USER_INFO_API}`,
        });
      }
    }
    return this.auth.user;
  }

  getTokenType() {
    return this.auth.bearer;
  }

  getExpiry() {
    return this.auth.expires_in;
  }

  /** @return boolean*/
  isLoggedIn() {
    return !!this.getToken();
  }

  getToken() {
    return Cookies.get(TokenKey);
  }

  setToken(token, expiry, rememberMe) {
    if (rememberMe) {
      return Cookies.set(TokenKey, token, { expires: expiry });
    }
    return Cookies.set(TokenKey, token);
  }

  deleteToken() {
    Cookies.remove(TokenKey);
  }

  removeToken() {
    return Cookies.remove(TokenKey);
  }

  toPojo() {
    return Engine.clone(this);
  }
}
