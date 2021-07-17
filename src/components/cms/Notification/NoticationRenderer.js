import { connect } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { NotificationModel } from '../../../modules/cms/models/notification.model';

const NotificationRenderer = ({ page, website, notifications }) => {
  const x = 10;
  const { addToast } = useToasts();
  if (notifications) {
    return (<div className='notification-wrapper'>
      {notifications.map((notification, index) => {
        if (notification.show) {
          if (notification.type === NotificationModel.types.TOAST) {
            addToast('Invalid Email or Password', {
              appearance: 'error',
              autoDismiss: true,
            });
          }
        }
        return <div key={index} className='notification-item' style={{ display: 'none' }}>{notification}</div>;
      })}
    </div>);
  }
  return <div/>;
};

export default connect((state) => ({
  notifications: state.notifications,
}))(NotificationRenderer);

