import React,{useState,useContext,useEffect} from 'react';
import hamburgerIcon from '../img/header/ic-hamburger-stroke-black.svg';
import notification from '../img/header/ic-notification-stroke-black.svg';
import backIcon from '../img/header/ic-back-stroke-black.svg';
import HABContext from '../context/headerAndBottom';

import BS from './ReMakeBottomSheetWithHook';

const Header = () => {
    const [bottomSheet,setBottomSheet] = useState(false)
    const toggleBottomSheet = () => {
        (bottomSheet) ? setBottomSheet(false) : setBottomSheet(true);
    }

    const { state } = useContext(HABContext);

    useEffect(() => {
        console.log({bottomSheet})
    }, [{bottomSheet}])

    return (
        <header className="max_container header_container">
            <div className="header_wrapper">
                <div className="header_left_div">
                    {
                        state.headerType === 'regular' ? 
                        <img className="header_hambuger_icon" src={hamburgerIcon} onClick={()=> toggleBottomSheet.bind(this)}/> 
                        : 
                        <img className="header_back_icon" src={backIcon}/>
                    }
                    
                </div>
                <div className="header_right_div">
                    <img className="header_notification_icon" src={notification}/>
                </div>
            </div>
            <BS
            visible={bottomSheet}
            onClose={toggleBottomSheet.bind(this)}
            >
                <button className='bottom-sheet-item' >Menu1</button>
                <button className='bottom-sheet-item' >Menu2</button>
            </BS>
        </header>
    );
};

export default Header;