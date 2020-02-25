import React from 'react';

import { numberWithCommas } from '@/global/utils.ts';

const FundingProgress = props => {
  const funding_bar_width = {
    width: `${(props.aggregate/props.target)*100}%`
  }

  console.log(props.dueDate);
  return (
    <div>
      <div className="funding_progress_bar_div">
        <div className='funding_progress_bar' style={funding_bar_width}></div> 
      </div>
      <div className="funding_information_div">
        <div className="funding_percentage">{(props.aggregate/props.target)*100}%</div>
        <div className="funding_cost">{numberWithCommas(props.aggregate)}원</div>
        <div className="funding_left_day"><p><span>14일</span> 남음</p></div>
      </div>
    </div>
  );
};

export default FundingProgress;
