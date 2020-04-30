import React, { useEffect, useContext } from 'react';

import PurchaseInfo from '@/components/purchase/PurchaseInfo';

import HABContext from '@/context/headerAndBottom';

const Purchase = () => {
  const HAB = useContext(HABContext);
  useEffect(() => {
    HAB.action.setBottomType('false');
    HAB.action.setHeaderType('back');
  }, []);
  return (
    <div className="home_body_nobn">
      <PurchaseInfo />
      <section className="pi_set">
        <div className="set">
          <p>배송지 설정</p>
          <p className="button">설정</p>
        </div>
        <p>배송지를 설정해주세요</p>
      </section>

      <section className="pi_address_comment">
        <p className="header">배송시 요청사항</p>
        <label htmlFor="address_input">배송시 요청사항</label>
        <input type="text" name="" id="address_input" maxLength="60" />
        <label htmlFor="address_input">0/60</label>
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

      <section className="pi_set">
        <div className="set">
          <p>결제수단 설정</p>
          <p className="button">설정</p>
        </div>
        <p>결제수단을 설정해주세요</p>
      </section>
    </div>
  );
};

export default Purchase;
