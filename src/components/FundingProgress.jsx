import React from 'react';

import { numberWithCommas, convertDate } from '@/global/utils.ts';

const FundingProgress = props => {
  const funding_bar_width = {
    width: `${(props.aggregate / props.target) * 100}%`
  };
  const diff = convertDate(props.dueDate)[5] - new Date()
  const currDay = 24 * 60 * 60 * 1000; // 시 * 분 * 초 * 밀리세컨
  return (
    <div>
      <div className="funding_progress_bar_div">
        <div className="funding_progress_bar" style={funding_bar_width}></div>
      </div>
      <div className="funding_information_div">
        <div className="funding_percentage">
          {(props.aggregate / props.target) * 100}%
        </div>
        <div className="funding_cost">
          {numberWithCommas(props.aggregate)}원
        </div>
        <div className="funding_left_day">
          <p>
            <span>{parseInt(diff/currDay)}일</span> 남음
          </p>
        </div>
      </div>
    </div>
  );
};

export default FundingProgress;
