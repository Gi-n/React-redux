
import { store } from 'react-notifications-component';
import 'animate.css'

const notification = {
    animationIn: ["animate__animated", "animate__bounceIn"],
        animationOut: ["animate__animated", "animate__bounceOut"],
        dismiss: {
            duration: 8000,
            timingFunction: 'ease-out',
            onScreen: true,
            showIcon: true,
            pauseOnHover: true,
        },
  };

const getIcon = (type) => {
    switch (type) {
        case 'success': return <i className="fa fa-check-circle"></i>
        case 'info': return <i className="fa fa-exclamation-circle"></i>
        case 'danger': return <i className="fa fa-exclamation-circle"></i>
        case 'warning': return <i className="fa fa-exclamation-triangle"></i>

        default:
            break;
    }
}

export const Notifications = (type, title, description) => {
    store.addNotification({
        title: title || '',
        message: description,
        type: type,
        insert: "top",
        ...notification,
        container: "top-right",
        
      });
}



export const customNotifications = (Type, Title, description, Timeout) => {
    store.addNotification({
        insert: "top",
        content: (
            <div className={`notification-custom-${Type}`}>
                <div className="notification-custom-icon">
                    {getIcon(Type)}
                </div>
                <div className="notification-custom-content">
                    <div className="notification__close"></div>
                    <div className="notification__title">Success</div>
                    <p className="notification-message">{description}</p>
                </div>
            </div>
        ),
        ...notification,
        container: "top-right",
        
    })
}

