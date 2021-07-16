import Cookies from 'js-cookie';
import {Engine} from "../../engine/core/engine";
import {BackendRestService} from "./backend.rest.service";

const TokenKey = process.env.ACCESS_TOKEN_KEY;

export class AuthManager {
  static LOGIN_API = '/api/cms/customers/auth/login';
  route;
  auth;
  static _instance = new AuthManager();

  /**@return AuthManager*/
  static instance() {
    return this._instance;
  }

  constructor(route) {
    this.route = route;
  }

  async authenticate(login, password, rememberMe = false) {
    const {BackendRestService} = require("./backend.rest.service");
    const result = await BackendRestService.instance().request({
      url: `${AuthManager.LOGIN_API}`,
      method: 'POST',
      data: {"login": login, "password": password}
    });
    throw result;
    this.auth = result.contents;
    this.setToken(this.auth.access_token, this.auth.expires_in, rememberMe);
    return this;
  }

  getUser() {
    return this.auth.user;
  }

  getTokenType() {
    return this.auth.bearer;
  }

  getExpiry() {
    return this.auth.expires_in;
  }

  getToken() {
    return Cookies.get(TokenKey);
  }

  setToken(token, expiry, rememberMe) {
    if (rememberMe) {
      return Cookies.set(TokenKey, token, {expires: expiry});
    } else {
      return Cookies.set(TokenKey, token);
    }
  }

  removeToken() {
    return Cookies.remove(TokenKey);
  }

  toPojo() {
    return Engine.clone(this);
  }

}
