import React, { useContext } from 'react';
import FDTabContext from '../../context/tab';

const FundingDetailTab = () => {
  const FDTab = useContext(FDTabContext);
  return (
    <div className="fd_tab_container">
      <div className="fd_tab_wrapper">
        <button
          // className={'funding_doing_btn' + (state.tabMenu === 'doing' ? ' btn_active' : '')}
          className="funding_doing_btn"
          onClick={() => FDTab.action.setFundingTab('story')}
        >
          스토리
        </button>
        <button onClick={() => FDTab.action.setFundingTab('community')}>커뮤니티</button>
        <button
          // className={'funding_reservate_btn' + (state.tabMenu === 'reservate' ? ' btn_active' : '')}
          className="funding_reservate_btn"
          onClick={() => FDTab.action.setFundingTab('info')}
        >
          정보
        </button>
      </div>
    </div>
  );
};

export default FundingDetailTab;
