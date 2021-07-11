// import {useToasts} from 'react-toast-notifications';

export class Notification {
  static defaultMessageConfig = {
    appearance: 'success',
    autoDismiss: true,
    autoDismissTimeout: 600,
  };

  /** @type instance NavigationService*/
  static _instance = new Notification();

  /** @return Notification*/
  static instance() {
    return Notification._instance;
  }

  showMessage(settings = {}) {
    settings = { ...Notification.defaultMessageConfig, ...settings };
    // const {addToast} = useToasts();
    // addToast(settings);
  }

  error(settings = {}) {
    return this.showMessage(Object.assign(settings, { appearance: 'success' }));
  }
}
