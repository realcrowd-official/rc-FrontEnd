import React, { useState, useEffect, useMemo } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

import CloseIcon from '../../img/bottomsheet/ic-close-stroke-black.svg';
import kakaoIcon from '../../img/bottomsheet/ic-social-kakao.svg';
import naverIcon from '../../img/bottomsheet/ic-social-naver.svg';
import fbIcon from '../../img/bottomsheet/ic-social-facebook.svg';

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
    setAnimationState('leave');
    setTimeout(() => {
      document.getElementsByTagName('html')[0].style.overflow = 'auto';
      setIsShow('hide');
      props.onCloseFinishAnimation && props.onCloseFinishAnimation();
    }, 500);
  };

  const Login = kind => {
    const Uri = `http://3.135.237.171:7777/api/account/socialLogin/${kind}/login`;
    // const Uri = `http://localhost:7777/api/account/socialLogin/${kind}/login`;
    axios.get(Uri).then(res => window.location.href = res.data);
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
            <p className="bts_explain_p">로그인</p>
          </div>
          <div className="bts_close_div"></div>
        </div>
        <div className="bts_login_div">
          <div
            className="bts_login_kakao"
            onClick={() => {
              Login(`kakao`);
            }}
          >
            <img className="bts_login_img" src={kakaoIcon} alt="kakao" />
            <p className="bts_login_p">카카오 계정으로 계속하기</p>
          </div>
          <div className="bts_login_naver">
            <img className="bts_login_img" src={naverIcon} alt="naver" />
            <p className="bts_login_p">네이버 계정으로 계속하기</p>
          </div>
          <div className="bts_login_facebook">
            <img className="bts_login_img" src={fbIcon} alt="facebook" />
            <p className="bts_login_p">페이스북 계정으로 계속하기</p>
          </div>
        </div>
        <div className="bts_waring_div">
          <div>
            <p>
              <a>이용약관</a> 및 <a>개인정보처리방침</a>의 내용을 읽었으며, 이에 동의 후 회원가입을
              진행합니다.
            </p>
          </div>
        </div>
        {/* {props.children}
        {props.list &&
          props.list.map((item, idx) => {
            return (
              <button key={idx} className="bottom-sheet-item" onClick={item.handler}>
                {item.title}
              </button>
            );
          })} */}
        {/* {props.appendCancelBtn &&
          (() => {
            return (
              <button className="bottom-sheet-item cancel" onClick={props.onClose}>
                cancel
              </button>
            );
          })()} */}
      </div>
    </div>
  );
};

ReMakeBottomSheetWithHook.propTypes = propTypes;
ReMakeBottomSheetWithHook.defaultProps = defaultProps;

export default ReMakeBottomSheetWithHook;
