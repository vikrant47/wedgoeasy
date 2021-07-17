
export class NavigationManager {
  /** @type instance NavigationService*/
  static _instance = new NavigationManager();

  /** @return NavigationManager*/
  static instance() {
    return NavigationManager._instance;
  }

  initialize(router) {
    this.router = router;
  }

  navigate(path) {
    this.router.push(path);
  }
}
