import React from 'react';
import hamburgerIcon from '../img/header/ic-hamburger-stroke-black.svg'
import notification from '../img/header/ic-notification-stroke-black.svg'

const header = () => {
    return (
        <div className="header_container max_container">
            <div className="header_hambuger_div">
                <img className="header_hambuger_icon" src={hamburgerIcon}/>
            </div>
            <div className="header_notification_div">
                <img className="header_notification_icon" src={notification}/>
            </div>
        </div>
    );
};

export default header;