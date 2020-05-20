import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  IC_CLOSE_STROKE_BLACK,
  IC_SOCIAL_FACEBOOK,
  IC_SOCIAL_KAKAO,
  IC_SOCIAL_NAVER,
} from '@/global/img/bottomSheet';

import BSContext from '@/context/bottomSheet';

import { loginAxios } from '@/lib/api';
import { isForInStatement, getDefaultCompilerOptions } from 'typescript';

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

const ReMakeBottomSheetWithHook = (props) => {
  const [isShow, setIsShow] = useState('shown');
  const [animationState, setAnimationState] = useState('enter');

  const { state, action } = useContext(BSContext);

  useEffect(() => {
    state.bottomSheet ? enter() : onClose();
  }, [state.bottomSheet]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
    script.onload = () => initiate();
    document.body.appendChild(script);
  }, []);

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

  const initiate = () => {
    const element_layer = document.getElementById('address_layer');
    console.log(window.innerWidth);
    daumPostcode();
    function daumPostcode() {
      new window.daum.Postcode({
        oncomplete: function (data) {
          let addr = '';
          let extraAddr = '';

          if (data.userSelectType == 'R') {
            addr = data.roadAddress;
          } else {
            addr = data.jibunAddress;
          }

          if (data.userSelectedType === 'R') {
            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
              extraAddr += data.bname;
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if (data.buildingName !== '' && data.apartment === 'Y') {
              extraAddr +=
                extraAddr !== '' ? ', ' + data.buildingName : data.buildingName;
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if (extraAddr !== '') {
              extraAddr = ' (' + extraAddr + ')';
            }
            // 조합된 참고항목을 해당 필드에 넣는다.
            // document.getElementById("sample2_extraAddress").value = extraAddr;
          } else {
            document.getElementById('sample2_extraAddress').value = '';
          }
        },
        width: '100%',
        height: '100%',
        maxSuggestItems: 5,
      }).embed(element_layer);

      element_layer.style.display = 'block';

      initLayerPosition();
    }

    function initLayerPosition() {
      var width =
        window.innerWidth >= 480
          ? 480
          : window.innerWidth <= 320
          ? 320
          : window.innerWidth; //우편번호서비스가 들어갈 element의 width
      var height = 320; //우편번호서비스가 들어갈 element의 height
      var borderWidth = 0; //샘플에서 사용하는 border의 두께

      // 위에서 선언한 값들을 실제 element에 넣는다.
      element_layer.style.width = width + 'px';
      element_layer.style.height = height + 'px';
      element_layer.style.border = borderWidth + 'px solid';
      // 실행되는 순간의 화면 너비와 높이 값을 가져와서 중앙에 뜰 수 있도록 위치를 계산한다.
      element_layer.style.left =
        ((window.innerWidth || document.documentElement.clientWidth) - width) /
          2 -
        borderWidth +
        'px';
      element_layer.style.top =
        ((window.innerHeight || document.documentElement.clientHeight) -
          height) /
          2 -
        borderWidth +
        'px';
    }
  };

  const layer = props.showBlockLayer ? (
    <div
      className="bottom-sheet-block-layer"
      onClick={() => {
        action.setBottomSheet(false);
      }}
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
            <p className="bts_explain_p">우편번호 검색</p>
          </div>
          <div className="bts_close_div"></div>
        </div>
        <div id="address_layer" className="bts_login_div">
          {/* <div>
            <form action="" method="get">
              <input type="text"></input>
            </form>
          </div> */}
        </div>
        <div className="bts_waring_div">
          <div>
            <p>
              <a>이용약관</a> 및 <a>개인정보처리방침</a>의 내용을 읽었으며, 이에
              동의 후 회원가입을 진행합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

ReMakeBottomSheetWithHook.propTypes = propTypes;
ReMakeBottomSheetWithHook.defaultProps = defaultProps;

export default ReMakeBottomSheetWithHook;
