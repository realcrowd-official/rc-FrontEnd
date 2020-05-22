import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import PurchaseInfo from '@/components/purchase/PurchaseInfo';

import HABContext from '@/context/headerAndBottom';
import itemContext from '@/context/item';
import accountContext from '@/context/account';

import { purchaseInfoAxios } from '@/lib/api';
import { convertDate, leftDay } from '@/lib/date';

import { numberWithCommas } from '@/global/utils.ts';

const Purchase = (props) => {
  const [addressComment, setAddressComment] = useState(0);
  const [userData, setUserData] = useState([]);
  const [userName, setUserName] = useState('');
  const [userTel, setUserTel] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [itemData, setItemData] = useState([]);
  const HAB = useContext(HABContext);
  const ITEMCONTEXT = useContext(itemContext);
  const ACONTEXT = useContext(accountContext);
  const history = useHistory();
  useEffect(() => {
    HAB.action.setBottomType('false');
    HAB.action.setHeaderType('back');
  }, []);

  useEffect(() => {
    //iId= history.location.state.itemId, token,
    async function axios() {
      const ans = await purchaseInfoAxios({
        pid: history.location.state.itemId,
        iId: history.location.state.selectItem,
      });
      if (ans.data.statusCode == 200) {
        setUserName(ans.data.user.name);
        setUserEmail(ans.data.user.email);
        setUserTel(ans.data.user.tel);
        setUserData([ans.data.user]);
        setItemData([ans.data.item]);
        ACONTEXT.action.setAddr(ans.data.user.address);
        if (ans.data.user.address.length > 0) {
          ans.data.user.address.map((Data) => {
            if (Data.primary && !ACONTEXT.state.addSelected) {
              ACONTEXT.action.setSelectAddr([
                Data.addrName,
                Data.addr,
                Data.primary,
              ]);
            }
          });
        }
      }
    }
    axios();
  }, []);

  const changeAddressComment = (e) => {
    setAddressComment(e.target.value.length);
  };

  const selectAddress = (e) => {
    history.push({ pathname: '/selectop', state: { kind: 'address' } });
  };

  return (
    <div className="home_body_nobn">
      <PurchaseInfo value={history.location.state.itemId} />
      <section className="pi_set section">
        <div className="set">
          <p>배송지 설정</p>
          <p
            className="button"
            onClick={() => {
              selectAddress();
            }}
          >
            설정
          </p>
        </div>
        {ACONTEXT.state.selectAddr == '' ? (
          <p>배송지를 설정해주세요</p>
        ) : (
          <div>
            <div className="so_header">
              <p className="so_name">{ACONTEXT.state.selectAddr[0]}</p>
              {ACONTEXT.state.selectAddr[2] && (
                <p className="so_origin">기본</p>
              )}
            </div>
            <div className="so_main">
              <p className="so_address">{ACONTEXT.state.selectAddr[1]}</p>
            </div>
          </div>
        )}
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
        <input
          type="text"
          name=""
          id="user_name"
          value={userData.length == 0 ? '' : userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="user_email">이메일 주소</label>
        <input
          type="text"
          name=""
          id="user_email"
          value={userData.length == 0 ? '' : userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <label htmlFor="user_phone">휴대폰 번호</label>
        <input
          type="text"
          name=""
          id="user_phone"
          maxLength="11"
          value={userData.length == 0 ? '' : userTel}
          onChange={(e) => setUserTel(e.target.value)}
        />
      </section>

      <section className="pi_summary section">
        <p className="header">리워드 요약</p>
        <div className="cost_div">
          <p className="info">후원액</p>
          <p className="cost">
            {itemData.length === 0
              ? numberWithCommas(99999)
              : numberWithCommas(itemData[0].rewardList[0].cost)}
            원
          </p>
        </div>
        <div className="cost_div">
          <p className="info">배송비</p>
          <p className="cost">
            {itemData.length === 0
              ? numberWithCommas(99999)
              : numberWithCommas(itemData[0].rewardList[0].shipPay)}
            원
          </p>
        </div>
        <div className="cost_div">
          <p className="info_bold">최종 결제금액</p>
          <p className="cost_primary">
            {itemData.length === 0
              ? numberWithCommas(99999)
              : numberWithCommas(
                  itemData[0].rewardList[0].cost +
                    itemData[0].rewardList[0].shipPay
                )}
            원
          </p>
        </div>
        <p>
          <span>
            펀딩 마감일 (
            {itemData.length == 0
              ? 'error입니다.'
              : `${convertDate(itemData[0].dueDate)[6]}년 ${
                  convertDate(itemData[0].dueDate)[0]
                }월 ${convertDate(itemData[0].dueDate)[1]}일 금요일`}
            )
          </span>
          까지 목표금액이 100% 모이지 않을 경우, 결제가 진행되지 않습니다.
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
