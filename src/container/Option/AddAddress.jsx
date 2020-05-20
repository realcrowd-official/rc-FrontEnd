import React, { useEffect, useContext, useState } from 'react';

import HABContext from '@/context/headerAndBottom';
import BSContext from '@/context/bottomSheet';

const AddAddress = () => {
  const HAB = useContext(HABContext);
  const BS = useContext(BSContext);

  useEffect(() => {
    HAB.action.setBottomType('false');
    HAB.action.setHeaderType('back');
    HAB.action.setNotiType('none');
    BS.action.setKindOfBS('address');
    return () => {
      BS.action.setKindOfBS('');
    };
  }, []);

  const kakaoAddress = () => {
    BS.action.setBottomSheet(true);
  };
  return (
    <div className="home_body_nobn">
      <section className="section aa_section">
        <div>
          <label htmlFor="input">애칭</label>
          <input type="text" />
        </div>

        <div>
          <label htmlFor="input">주소</label>
          <div
            onClick={() => {
              kakaoAddress();
            }}
          >
            <input className="main_address" type="text" disabled />
          </div>
        </div>

        <div>
          <label htmlFor="input">상세주소</label>
          <input type="text" />
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default AddAddress;
