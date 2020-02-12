import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import FundingItem from '../../components/Funding/FundingItem';
import ActionBtn from '../../components/ActionBtn';

import CloseIcon from '../../img/bottomsheet/ic-close-stroke-black.svg';

const propTypes = {
  showBlockLayer: PropTypes.bool,
  visible: PropTypes.bool,
  className: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  appendCancelBtn: PropTypes.bool,
  customLayout: PropTypes.string
};

const defaultProps = {
  showBlockLayer: true,
  visible: true,
  className: '',
  appendCancelBtn: true
};

const SelectRewardBottomSheet = props => {
  const [isShow, setIsShow] = useState('shown');
  const [animationState, setAnimationState] = useState('enter');

  useEffect(() => {
    props.visible ? enter() : onClose();
  }, [props.visible]);

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
    <div className="bottom-sheet-block-layer" onClick={props.onClose} />
  ) : null;
  return (
    <div
      className={`bottom-sheet-wrapper ${props.className || ''} ${animationState || ''} ${isShow ||
        ''}`}
    >
      {layer}
      {props.customLayout}
      <div className="bottom-sheet home_body">
        <div className="bts_top"></div>
        <div className="bts_middle">
          <div className="bts_close_div">
            <img className="bts_close_icon" src={CloseIcon} alt="" onClick={props.onClose} />
          </div>
          <div className="bts_explain_div">
            <p className="bts_explain_p">리워드 선택</p>
          </div>
          <div className="bts_close_div"></div>
        </div>
        <div>
          <FundingItem />
        </div>
        <div className="srbs_bottom_div">
          <div className="srbs_count_div">
            <p>수량 선택</p>
            <div className="srbs_count_btn_div">
              <ActionBtn aText="-" />
              <p>0</p>
              <ActionBtn aText="+" />
            </div>
          </div>
          <ActionBtn aText="다음 단계로" />
        </div>
      </div>
    </div>
  );
};

SelectRewardBottomSheet.propTypes = propTypes;
SelectRewardBottomSheet.defaultProps = defaultProps;

export default SelectRewardBottomSheet;
