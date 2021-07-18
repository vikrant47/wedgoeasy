import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export class NavigationManager {
  /** @type instance NavigationService*/
  static _instance = new NavigationManager();

  /** @return NavigationManager*/
  static instance() {
    return NavigationManager._instance;
  }

  static isLoginPath(path) {
    return path === publicRuntimeConfig.LOGIN_PAGE;
  }

  isLoginPage() {
    return this.router.path === publicRuntimeConfig.LOGIN_PAGE;
  }

  initialize(router) {
    this.router = router;
  }

  navigate(path) {
    this.router.push(path);
  }
}
