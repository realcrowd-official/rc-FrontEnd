import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import FundingItem from '@/components/Funding/FundingItem';
import ActionBtn from '@/components/ActionBtn';

import { IC_CLOSE_STROKE_BLACK } from '@/global/img/bottomSheet';

// import CloseIcon from '@/img/bottomsheet/ic-close-stroke-black.svg';

import BSContext from '@/context/bottomSheet';

const propTypes = {
  showBlockLayer: PropTypes.bool,
  className: PropTypes.string,
  appendCancelBtn: PropTypes.bool,
  customLayout: PropTypes.string,
};

const defaultProps = {
  showBlockLayer: true,
  className: '',
  appendCancelBtn: true,
};

const SelectRewardBottomSheet = (props) => {
  const [isShow, setIsShow] = useState('shown');
  const [animationState, setAnimationState] = useState('enter');

  const { state, action } = useContext(BSContext);

  useEffect(() => {
    state.bottomSheet ? enter() : onClose();
  }, [state.bottomSheet]);

  const enter = () => {
    setIsShow('shown');
    setTimeout(() => {
      document.getElementsByTagName('html')[0].style.overflow = 'hidden';
      setAnimationState('enter');
    }, 50);
  };

  const onClose = () => {
    setAnimationState('leave');
    setTimeout(() => {
      document.getElementsByTagName('html')[0].style.overflow = 'auto';
      setIsShow('hide');
      props.onCloseFinishAnimation && props.onCloseFinishAnimation();
    }, 500);
  };

  const layer = props.showBlockLayer ? (
    <div
      className="bottom-sheet-block-layer"
      onClick={() => action.setBottomSheet(false)}
    />
  ) : null;
  return (
    <div
      className={`bottom-sheet-wrapper ${props.className || ''} ${
        animationState || ''
      } ${isShow || ''}`}
    >
      {layer}
      {props.customLayout}
      <div className="bottom-sheet home_body">
        <div className="bts_top"></div>
        <div className="bts_middle">
          <div className="bts_close_div">
            <img
              className="bts_close_icon"
              src={IC_CLOSE_STROKE_BLACK}
              alt=""
              onClick={() => action.setBottomSheet(false)}
            />
          </div>
          <div className="bts_explain_div">
            <p className="bts_explain_p">리워드 선택</p>
          </div>
          <div className="bts_close_div"></div>
        </div>
        <div className="bts_FundingItem scroll">
          <FundingItem />
        </div>
        <div className="srbs_bottom_div">
          {/* <div className="srbs_count_div">
            <p className="srbs_count_div_setCountText">수량 선택</p>
            <div className="srbs_count_btn_div">
              <ActionBtn btnClass="ActionBtn_countBtn" aText="-" />
              <p className="srbs_count_btn_count">0</p>
              <ActionBtn btnClass="ActionBtn_countBtn" aText="+" />
            </div>
          </div> */}
          <ActionBtn btnClass="ActionBtn_toNext" aText="다음 단계로" />
        </div>
      </div>
    </div>
  );
};

SelectRewardBottomSheet.propTypes = propTypes;
SelectRewardBottomSheet.defaultProps = defaultProps;

export default SelectRewardBottomSheet;
