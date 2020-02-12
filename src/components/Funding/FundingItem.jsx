import React from 'react';

const FundingItem = () => {
  const itemArray = [
    {
      cost: '12,000',
      option: '에코백 1개',
      leftItem: '148',
      shipPay: '2,500',
      shipDay: '2020년 4월초 예정'
    },
    {
      cost: '30,000',
      option: '에코백 4개',
      leftItem: '80',
      shipPay: '2,500',
      shipDay: '2020년 4월초 예정'
    },
    {
      cost: '100,000',
      option: '에코백 3개 + 다이어리 1개',
      leftItem: '0',
      shipPay: '2,500',
      shipDay: '2020년 4월초 예정'
    }
  ];
  return (
    <div className="fi_div">
      {itemArray.map(Data => {
        return (
          <div className={`fi_item_div ${Data.leftItem === '0' && `fi_item_sold_out`}`}>
            <p className="fi_item_cost">
              <span>{Data.cost}</span>원을 후원합니다
            </p>
            <p className="fi_item_option">
              {Data.option} (<span>{Data.leftItem}개 남음</span>)
            </p>
            <p>배송비:{Data.shipPay}원</p>
            <p>
              리워드 배송:<span>{Data.shipDay}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default FundingItem;
