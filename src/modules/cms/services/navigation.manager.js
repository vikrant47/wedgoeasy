const w = (typeof window === 'undefined') ? null : window;

export class NavigationManager {
  static navigate(path, title) {
    if (!path) {
      throw new Error(`Invalid path to navigate ${path}`);
    }
    w && w.history.pushState({path}, title, path);
  }
}
