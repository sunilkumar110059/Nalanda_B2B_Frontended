import React, { useState, useRef, useEffect } from 'react';
import { IoNotifications } from 'react-icons/io5';
import { RiBook3Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { ROUTE_NAV } from '../RoutePath/RoutePathIndex';
function Notification() {

    const notificationDropDownRef = useRef(null);

    const [NotificationShow, SetNotificationShowFn] = useState(false)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (notificationDropDownRef.current && !notificationDropDownRef.current.contains(event.target)) { SetNotificationShowFn(false) }
            else { SetNotificationShowFn(!NotificationShow) }
        };
        document.addEventListener("click", handleClickOutside, false);
        return () => {
            document.removeEventListener("click", handleClickOutside, false);
        };
    }, [NotificationShow]);

    return (
        <div className='notifi-col'>
            <div className='notifi' ref={notificationDropDownRef}>
                <div className='noti-counter bg-color-4-1 text-color-1-1 font-11'>0</div>
                <IoNotifications className='font-22 noti-icon' />
            </div>

            {NotificationShow &&
                <div className='dropdown bg-color-1-1 text-color-2-3 shadow-4'>
                    <div className='nothd py-2 px-2 bg-color-3-1 text-color-1-1 text-uppercase font-14'>NOTIFICATION</div>
                    <ul className='scrollbar'>
                        {[...Array(5).keys()].map((elm) => (
                            <li className='border-color-2-2 border-color-2-2 border-1-bottom btn-4' key={elm}>
                                <Link to={ROUTE_NAV.MY_CLASSES_PATH}>
                                    <div className='noteicon font-32 text-color-3-1'><RiBook3Fill /> </div>
                                    <div className='notetext'>
                                        <div className='ovr font-12'>Upcoming Class</div>
                                        <div className='ovr font-12'>10-02-2023</div>
                                        <div className='ovr font-14 fw-bold text-color-3-1'>You have a scheduled class today at 07:00:00 (Period: 1)</div>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    )
}

export default Notification