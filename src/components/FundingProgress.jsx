import React from 'react';

import { numberWithCommas } from '@/global/utils.ts';

const FundingProgress = props => {
  return (
    <div>
      <div className="funding_progress_bar_div">
        <div className="funding_progress_bar"></div> 
        {/* 수정예정 */}
      </div>
      <div className="funding_information_div">
        <div className="funding_percentage">{(props.aggregate/props.target)*100}%</div>
        <div className="funding_cost">{numberWithCommas(props.aggregate)}원</div>
      </div>
    </div>
  );
};

export default FundingProgress;
