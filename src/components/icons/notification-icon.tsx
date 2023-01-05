import Notification from '@components/notifications/notification'
import {useState} from 'react'
const NotificationIcon:React.FC = () => {
    const [show , setShow] = useState<boolean>(false)
    return (
        <div>
            <button onClick={() => setShow(!show)}>
          <img src="https://cdn.pnj.io/images/image-update/layout/mobile/noti-default.svg" />
        </button>
        {show && <Notification/>}
        </div>
    )
}
export default NotificationIcon;