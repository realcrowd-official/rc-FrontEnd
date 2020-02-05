import React from 'react';

const FundingProgress = () => {
  return (
    <div>
      <div className="funding_progress_bar_div">
        <div className="funding_progress_bar"></div>
      </div>
      <div className="funding_information_div">
        <div className="funding_percentage">34%</div>
        <div className="funding_cost">339,000원</div>
      </div>
    </div>
  );
};

export default FundingProgress;
