import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

import CloseIcon from '../img/bottomsheet/ic-close-stroke-black.svg';

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

const ReMakeBottomSheetWithHook = props => {
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
    document.getElementsByTagName('html')[0].style.overflow = 'auto';
    setAnimationState('leave');
    setIsShow('hide');
    props.onCloseFinishAnimation && props.onCloseFinishAnimation();
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
            <img className="bts_close_icon" src={CloseIcon} alt="" />
          </div>
          <div className="bts_explain_div">
            <p className="bts_explain_p">로그인</p>
          </div>
        </div>
        {props.children}
        {props.list &&
          props.list.map((item, idx) => {
            return (
              <button key={idx} className="bottom-sheet-item" onClick={item.handler}>
                {item.title}
              </button>
            );
          })}
        {props.appendCancelBtn &&
          (() => {
            return (
              <button className="bottom-sheet-item cancel" onClick={props.onClose}>
                cancel
              </button>
            );
          })()}
      </div>
    </div>
  );
};

ReMakeBottomSheetWithHook.propTypes = propTypes;
ReMakeBottomSheetWithHook.defaultProps = defaultProps;

export default ReMakeBottomSheetWithHook;
