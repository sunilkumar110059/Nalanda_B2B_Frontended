import React, { useState, useRef, useEffect } from 'react';
import { FaUserCircle, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ROUTE_NAV } from '../RoutePath/RoutePathIndex';

function User() {
    const userDropDownRef = useRef(null);

    const [UserShow, SetUserShowFn] = useState(false)
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (userDropDownRef.current && !userDropDownRef.current.contains(event.target)) { SetUserShowFn(false) }
            else { SetUserShowFn(!UserShow) }
        };
        document.addEventListener("click", handleClickOutside, false);
        return () => {
            document.removeEventListener("click", handleClickOutside, false);
        };
    }, [UserShow]);

    return (
        <div className='cover h-100 logout_col'>
            <div className='row gx-0 h-100' ref={userDropDownRef}>
                <div className='col-auto d-flex align-items-center'><FaUserCircle className='text-color-2-3 font-32' /></div>
                <div className='col-auto d-flex align-items-center font-14 usernametext ms-2'>Saurabh Jain</div>
            </div>
            {UserShow &&
                <div className='dropbox bg-color-1-1 shadow-4'>
                    <ul>
                        <li className='border-color-2-2 border-color-2-2 border-1-bottom btn-4'>
                            <Link to={ROUTE_NAV.TOPIC_PATH}>
                                <span className='usericon font-12 text-color-3-1'><FaUser /> </span>
                                <span className='usertext font-14'>Lorean Lipsum</span>
                            </Link>
                        </li>
                        <li className='border-color-2-2 border-color-2-2 border-1-bottom btn-4'>
                            <Link to={ROUTE_NAV.TOPIC_PATH}>
                                <span className='usericon font-12 text-color-3-1'><FaSignOutAlt /> </span>
                                <span className='usertext font-14'>Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            }
        </div>
    )
}

export default User

