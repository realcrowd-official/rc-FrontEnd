import React, { useState, useContext, useEffect } from 'react';
import FDTabContext from '@/context/tab';

const FundingDetailTab = props => {
  const FDTab = useContext(FDTabContext);

  const [scroll, setScroll] = useState(0);
  const [tabTop, setTabTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    tabTop ^ (scroll.scrollTop >= 815) && setTabTop(!tabTop);
  }, [scroll]);

  const onScroll = e => {
    const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop);
    setScroll({ scrollTop });
  };

  return (
    <div className={`fd_tab_container ${tabTop && 'fd_tab_top'}`}>
      <div className="fd_tab_wrapper">
        <button
          // className={'funding_doing_btn' + (state.tabMenu === 'doing' ? ' btn_active' : '')}
          className="funding_doing_btn"
          onClick={() => FDTab.action.setFundingTab('story')}
        >
          스토리
        </button>
        <button onClick={() => FDTab.action.setFundingTab('community')}>
          커뮤니티
        </button>
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
