import React from 'react';
import { numberWithCommas } from '@/global/utils.ts';

const PurchaseInfo = (props) => {
  console.log(props.value);
  return (
    <div className="pi_info section">
      <p className="pi_info_title">후원 상세 내역</p>
      <div className="pi_info_header">
        <img
          src={
            props.value[0].mainImg
              ? props.value[0].mainImg
              : 'https://via.placeholder.com/150'
          }
          alt=""
        />
        <div>
          <p className="title">{props.value[0].title}</p>
          <p className="content">{props.value[0].rewardList[0].option}</p>
        </div>
      </div>
      <div className="pi_info_cost">
        <div>
          <p className="info">후원액</p>{' '}
          <p className="cost">{`${numberWithCommas(
            props.value[0].rewardList[0].cost
          )}원`}</p>
        </div>
        <div>
          <p className="info">배송비</p>{' '}
          <p className="cost">
            {`${numberWithCommas(props.value[0].rewardList[0].shipPay)}원`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PurchaseInfo;
