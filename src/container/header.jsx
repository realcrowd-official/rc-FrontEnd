import React from 'react';
import hamburgerIcon from '../img/header/ic-hamburger-stroke-black.svg'
import notification from '../img/header/ic-notification-stroke-black.svg'

const Header = () => {
    return (
        <div className="max_container header_container">
            <div className="header_hambuger_div">
                <img className="header_hambuger_icon" src={hamburgerIcon}/>
            </div>
            <div className="header_notification_div">
                <img className="header_notification_icon" src={notification}/>
            </div>
        </div>
    );
};

export default Header;