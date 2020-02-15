import React from 'react';

import { numberWithCommas } from '../../global/utils.ts';

const FundingItem = () => {
  const itemArray = [
    {
      cost: 12000,
      option: '에코백 1개',
      leftItem: 148,
      shipPay: 2500,
      shipDay: '2020년 4월초'
    },
    {
      cost: 30000,
      option: '에코백 4개',
      leftItem: 64,
      shipPay: 2500,
      shipDay: '2020년 4월초'
    },
    {
      cost: 100000,
      option: '에코백 3개 + 다이어리 1개',
      leftItem: 42,
      shipPay: 2500,
      shipDay: '2020년 4월초'
    },
    {
      cost: 120000,
      option: '에코백 4개 + 다이어리 2개',
      leftItem: 40,
      shipPay: 2500,
      shipDay: '2020년 4월초'
    },
    {
      cost: 150000,
      option: '에코백 6개 + 다이어리 3개',
      leftItem: 0,
      shipPay: 2500,
      shipDay: '2020년 4월초'
    }
  ];

  return (
    <div className="fi_div">
      {itemArray.map(Data => {
        return (
          <div
            title="이 리워드 선택하기"
            className={`fi_item_div ${Data.leftItem === 0 && `fi_item_sold_out`}`}
          >
            <p className="fi_item_cost">
              <span>{numberWithCommas(Data.cost)}</span>원을 후원합니다
            </p>
            <p className="fi_item_option">
              {Data.option} (<span>{Data.leftItem}개 남음</span>)
            </p>
            <p>배송비:&nbsp;{numberWithCommas(Data.shipPay)}원</p>
            <p>
              리워드 배송:&nbsp;<span>{Data.shipDay} 예정</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default FundingItem;
