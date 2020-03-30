import React, { useContext } from 'react';

import { numberWithCommas } from '@/global/utils.ts';

import itemContext from '@/context/item';

const FundingItem = props => {
  const ITEMCONTEXT = useContext(itemContext);

  return (
    <div className="fi_div">
      {ITEMCONTEXT.state.items === undefined ||
        ITEMCONTEXT.state.items.map(Data => {
          return (
            <div
              title="이 리워드 선택하기"
              className={`fi_item_div ${Data.leftItem === 0 &&
                `fi_item_sold_out`}`}
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
