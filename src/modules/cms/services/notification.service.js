// import {useToasts} from 'react-toast-notifications';

export class NotificationService {
  addToast;
  static defaultMessageConfig = {
    message: '',
    appearance: 'success',
    autoDismiss: true,
    autoDismissTimeout: 5000,
  };

  /** @type instance NavigationService*/
  static _instance = new NotificationService();

  /** @return NotificationService*/
  static instance() {
    return NotificationService._instance;
  }

  initialize({ addToast }) {
    this.addToast = addToast;
  }

  showMessage(settings = {}) {
    settings = { ...NotificationService.defaultMessageConfig, ...settings };
    this.addToast(settings.message, settings);
  }

  error(settings = {}) {
    return this.showMessage(Object.assign(settings, { appearance: 'success' }));
  }
}
