import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE_NAV } from '../RoutePath/RoutePathIndex';
import { IMAGES } from '../../Shared/Images/ImagesIndex';
import { GiHamburgerMenu } from 'react-icons/gi';
import Notification from './Notification';
import LogOut from './LogOut';
import User from './User';

function HeaderIndex() {
    return (
        <div className='headerpart py-2 px-3 ovr bg-color-1-1'>
            <div className='navbar'>
                <div className='col-auto d-flex align-items-center' id='navButton'><GiHamburgerMenu className='font-22' /></div>

                <div className='col d-flex align-items-center'>
                    <Link to={ROUTE_NAV.MY_CLASSES_PATH}> <img src={IMAGES.NALANDA_LOGO} alt="School Logo" className='nalanda-logo' />  </Link>
                </div>

                <div className='col-auto d-flex align-items-center'> <Notification /></div>

                <div className='col-auto d-flex align-items-center border-color-2-3 border-1-left logoutwrap'><LogOut /></div>

                <div className='col-auto'><User /></div>
            </div>
        </div>
    )
}

export default HeaderIndex