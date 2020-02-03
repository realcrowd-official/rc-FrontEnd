import React,{useContext} from 'react';
import hamburgerIcon from '../img/header/ic-hamburger-stroke-black.svg';
import notification from '../img/header/ic-notification-stroke-black.svg';
import backIcon from '../img/header/ic-back-stroke-black.svg';
import HABContext from '../context/headerAndBottom';

const Header = () => {
    const { state } = useContext(HABContext);
    return (
        <header className="max_container header_container">
            <div className="header_wrapper">
                <div className="header_left_div">
                    {
                        state.headerType === 'regular' ? 
                        <img className="header_hambuger_icon" src={hamburgerIcon}/> 
                        : 
                        <img className="header_back_icon" src={backIcon}/>
                    }
                    
                </div>
                <div className="header_right_div">
                    <img className="header_notification_icon" src={notification}/>
                </div>
            </div>
        </header>
    );
};

export default Header;