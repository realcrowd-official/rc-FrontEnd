import React, { useState, useContext } from 'react';

import ActionBtn from '../ActionBtn';
import ShareBtn from '../ShareBtn';

import BSContext from '../../context/bottomSheet';

const FundingButton = () => {
  const BS = useContext(BSContext);

  return (
    <div className="fd_btn">
      <div className="fd_btn_wrapper">
        <div
          onClick={() => {
            BS.action.setBottomSheet(true);
          }}
        >
          <ActionBtn aText="프로젝트 후원하기" />
        </div>
        <ShareBtn />
      </div>
    </div>
  );
};

export default FundingButton;
