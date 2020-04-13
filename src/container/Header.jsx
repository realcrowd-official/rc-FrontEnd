import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import {
  IC_HAMBURGER_STROKE_BLACK,
  IC_NOTIFICATION_STROKE_BLACK,
  IC_BACK_STROKE_BLACK,
} from '@/global/img/header';

import HABContext from '@/context/headerAndBottom';

import BSContext from '@/context/bottomSheet';

import LBS from '@/container/BottomSheet/LoginBottomSheet';
import SRBS from '@/container/BottomSheet/SelectRewardBottomSheet';

const Header = () => {
  const { state } = useContext(HABContext);
  const BSState = useContext(BSContext);
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };
  return (
    <header className="max_container header_container">
      <div className="header_wrapper">
        <div className="header_left_div">
          {state.headerType === 'regular' ? (
            <img
              className="header_hambuger_icon"
              src={IC_HAMBURGER_STROKE_BLACK}
            />
          ) : (
            <img
              className="header_back_icon"
              src={IC_BACK_STROKE_BLACK}
              onClick={() => goBack()}
            />
          )}
        </div>
        <div className="header_right_div">
          <img
            className="header_notification_icon"
            src={IC_NOTIFICATION_STROKE_BLACK}
          />
        </div>
      </div>
      {BSState.state.kindOfBS === 'login' && <LBS />}
      {BSState.state.kindOfBS === 'funding' && <SRBS />}
    </header>
  );
};

export default Header;
