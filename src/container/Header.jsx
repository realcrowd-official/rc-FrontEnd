import React, { useState, useContext, useEffect } from 'react';
import hamburgerIcon from '@/img/header/ic-hamburger-stroke-black.svg';
import notification from '@/img/header/ic-notification-stroke-black.svg';
import backIcon from '@/img/header/ic-back-stroke-black.svg';
import HABContext from '@/context/headerAndBottom';
import BSContext from '@/context/bottomSheet';

import LBS from '@/container/BottomSheet/LoginBottomSheet';
import SRBS from '@/container/BottomSheet/SelectRewardBottomSheet';

const Header = () => {
  const { state } = useContext(HABContext);
  const BSState = useContext(BSContext);
  return (
    <header className="max_container header_container">
      <div className="header_wrapper">
        <div className="header_left_div">
          {state.headerType === 'regular' ? (
            <img
              className="header_hambuger_icon"
              src={hamburgerIcon}
              onClick={() => {
                BSState.action.setBottomSheet(true);
              }}
            />
          ) : (
            <img className="header_back_icon" src={backIcon} />
          )}
        </div>
        <div className="header_right_div">
          <img className="header_notification_icon" src={notification} />
        </div>
      </div>
      {BSState.state.kindOfBS === 'login' && <LBS />}
      {BSState.state.kindOfBS === 'funding' && <SRBS />}
    </header>
  );
};

export default Header;
