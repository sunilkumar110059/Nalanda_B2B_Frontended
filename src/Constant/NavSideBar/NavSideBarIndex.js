import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTE_NAV } from '../RoutePath/RoutePathIndex';
import { AiFillHome } from 'react-icons/ai';

function NavSideBarIndex() {
    const [NavBarShow, SetNavBarShowFn] = useState(false)

    useEffect(() => {
        const navSideBarFun = () => { SetNavBarShowFn(!NavBarShow) };
        const navButton = document.getElementById("navButton")
        navButton.addEventListener('click', navSideBarFun);
        return () => {
            navButton.removeEventListener('click', navSideBarFun);
        };
    }, [NavBarShow])

    return (
        <div id="nav-sidebar" className={`bg-color-1-1 navSideBarWrap pos-relative ${NavBarShow ? "sideBarShowHide" : ""}`}>
            <div className="side-navbar">
                <ul>
                    <li>
                        <Link className='active' to={ROUTE_NAV.TOPIC_PATH}>
                            <span className='nav-icon'><AiFillHome /></span>
                            <span className='nav-txt'>Text</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={ROUTE_NAV.TOPIC_PATH}>
                            <span className='nav-icon'><AiFillHome /></span>
                            <span className='nav-txt'>Text</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={ROUTE_NAV.TOPIC_PATH}>
                            <span className='nav-icon'><AiFillHome /></span>
                            <span className='nav-txt'>Text</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={ROUTE_NAV.TOPIC_PATH}>
                            <span className='nav-icon'><AiFillHome /></span>
                            <span className='nav-txt'>Text</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={ROUTE_NAV.TOPIC_DETAIL_PATH}>
                            <span className='nav-icon'><AiFillHome /></span>
                            <span className='nav-txt'>Topic Detail</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={ROUTE_NAV.UI_PATTERN_PATH}>
                            <span className='nav-icon'><AiFillHome /></span>
                            <span className='nav-txt'>UI Pattern</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavSideBarIndex