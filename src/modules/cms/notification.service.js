import {useToasts} from 'react-toast-notifications';

export class NotificationService {
  static defaultMessageConfig = {
    appearance: 'success',
    autoDismiss: true,
    autoDismissTimeout: 600,
  };
  /** @type instance NavigationService*/
  static _instance = new NotificationService();

  /** @return NotificationService*/
  static instance() {
    return NotificationService._instance;
  }

  showMessage(settings = {}) {
    settings = Object.assign({}, NotificationService.defaultMessageConfig, settings);
    const {addToast} = useToasts();
    addToast(settings);
  }

  error(settings = {}) {
    return this.showMessage(Object.assign(settings, {appearance: 'success'}));
  }
}
