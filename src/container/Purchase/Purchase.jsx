import React, { useState, useEffect, useContext } from 'react';

import PurchaseInfo from '@/components/purchase/PurchaseInfo';

import HABContext from '@/context/headerAndBottom';

const Purchase = () => {
  const [addressComment, setAddressComment] = useState(0);
  const HAB = useContext(HABContext);
  useEffect(() => {
    HAB.action.setBottomType('false');
    HAB.action.setHeaderType('back');
  }, []);

  const changeAddressComment = (e) => {
    setAddressComment(e.target.value.length);
  };

  return (
    <div className="home_body_nobn">
      <PurchaseInfo />
      <section className="pi_set section">
        <div className="set">
          <p>배송지 설정</p>
          <p className="button">설정</p>
        </div>
        <p>배송지를 설정해주세요</p>
      </section>

      <section className="pi_address_comment section">
        <p className="header">배송시 요청사항</p>
        <label htmlFor="address_input">배송시 요청사항</label>
        <input
          type="text"
          name=""
          id="address_input"
          maxLength="60"
          onChange={(e) => changeAddressComment(e)}
        />
        <label htmlFor="address_input">{addressComment}/60</label>
        <div>
          <input
            className="checkbox"
            type="checkbox"
            name=""
            id="address_save_checkbox"
          />
          <label className="check_label" htmlFor="address_save_checkbox">
            배송시 요청사항 저장하기
          </label>
        </div>
      </section>

      <section className="pi_set section">
        <div className="set">
          <p>결제수단 설정</p>
          <p className="button">설정</p>
        </div>
        <p>결제수단을 설정해주세요</p>
      </section>

      <section className="pi_user_inform section">
        <label htmlFor="user_name">이름</label>
        <input type="text" name="" id="user_name" />
        <label htmlFor="user_email">이메일 주소</label>
        <input type="text" name="" id="user_email" />
        <label htmlFor="user_phone">휴대폰 번호</label>
        <input type="text" name="" id="user_phone" />
      </section>

      <section className="pi_summary section">
        <p className="header">리워드 요약</p>
        <div className="cost_div">
          <p className="info">후원액</p>
          <p className="cost">99999원</p>
        </div>
        <div className="cost_div">
          <p className="info">배송비</p>
          <p className="cost">99999원</p>
        </div>
        <div className="cost_div">
          <p className="info_bold">최종 결제금액</p>
          <p className="cost_primary">99999원</p>
        </div>
        <p>
          <span>펀딩 마감일 (2020년 3월 6일 금요일)</span>까지 목표금액이 100%
          모이지 않을 경우, 결제가 진행되지 않습니다.
        </p>
        <textarea name="" id="" cols="30" rows="10" disabled>
          국회의 정기회는 법률이 정하는 바에 의하여 매년 1회 집회되며, 국회의
          임시회는 대통령 또는 국회재적의원 4분의 1 이상의 요구에 의하여
          집회된다. 모든 국민은 근로의 의무를 진다. 국가는 근로의 의무의 내용과
          조건을 민주주의원칙에 따라 법률로 정한다.
        </textarea>
        <input
          className="agree_checkbox"
          type="checkbox"
          name=""
          id="agree_checkbox"
        />
        <label className="agree_check_label" htmlFor="agree_checkbox">
          위의 약관 내용을 모두 읽고 이해하였으며, 이에 동의합니다.
        </label>
      </section>

      <section className="pi_button">
        <button>
          <p>결제 예약하기</p>
        </button>
      </section>
    </div>
  );
};

export default Purchase;
