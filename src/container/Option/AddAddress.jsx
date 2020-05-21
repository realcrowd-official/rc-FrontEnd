import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import HABContext from '@/context/headerAndBottom';
import BSContext from '@/context/bottomSheet';

import { saveAddr } from '@/lib/api';

const AddAddress = () => {
  const history = useHistory();
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

  const goBack = () => {
    history.goBack();
  };

  const saveAddrAxios = async () => {
    const nameVal = document.getElementById('name').value;
    const mainAddrVal = document.getElementById('main_addr').value;
    const subAddrVal = document.getElementById('sub_addr').value;
    if (nameVal == '' || mainAddrVal == '' || subAddrVal == '') {
      alert('필드를 다 입력해주세요');
    } else {
      async function axios() {
        const ans = await saveAddr({
          addrName: nameVal,
          addr: mainAddrVal + subAddrVal,
          primary: document.getElementById('origin_addr').checked,
        });
        if (ans.data.statusCode === 200) {
          await alert('저장완료');
          await goBack();
          await goBack();
        }
      }
      axios();
    }
    event.preventDefault();
  };

  return (
    <div className="home_body_nobn">
      <section className="section aa_section">
        <div>
          <label className="input_label" htmlFor="input">
            애칭
          </label>
          <input id="name" type="text" />
        </div>

        <div>
          <label className="input_label" htmlFor="input">
            주소
          </label>
          <div
            onClick={() => {
              kakaoAddress();
            }}
          >
            <input
              id="main_addr"
              className="main_address"
              type="text"
              readOnly
            />
          </div>
        </div>

        <div>
          <label className="input_label" htmlFor="input">
            상세주소
          </label>
          <input id="sub_addr" type="text" />
        </div>

        <div className="check_div">
          <input
            className="addr_checkbox"
            type="checkbox"
            name="origin_addr"
            id="origin_addr"
            value="true"
          />
          <label className="addr_label" htmlFor="origin_addr">
            기본 배송지로 설정
          </label>
        </div>
      </section>
      <section className="su_submit_div">
        {/* css는 signup에있슴 */}
        <button
          type="submit"
          onClick={() => {
            saveAddrAxios();
          }}
        >
          배송지 추가하기
        </button>
      </section>
    </div>
  );
};

export default AddAddress;
