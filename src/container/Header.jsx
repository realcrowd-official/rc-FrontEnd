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
import ABS from '@/container/BottomSheet/AddressBottomSheet';

const Header = () => {
  const { state } = useContext(HABContext);
  const BSState = useContext(BSContext);
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const addAddress = () => {
    history.push({ pathname: '/addAddress' });
  };

  const addPurchase = () => {
    history.push({ pathname: '/addPurchase' });
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
          {state.notiType === 'regular' ? (
            <img
              className="header_notification_icon"
              src={IC_NOTIFICATION_STROKE_BLACK}
            />
          ) : state.notiType === 'add' ? (
            <p
              className="header_add"
              onClick={() => {
                state.addType == 'address'
                  ? addAddress()
                  : state.addType == 'purchase'
                  ? addPurchase()
                  : null;
              }}
            >
              추가
            </p>
          ) : null}
        </div>
      </div>
      {BSState.state.kindOfBS === 'login' && <LBS />}
      {BSState.state.kindOfBS === 'funding' && <SRBS />}
      {BSState.state.kindOfBS === 'address' && <ABS />}
    </header>
  );
};

export default Header;
