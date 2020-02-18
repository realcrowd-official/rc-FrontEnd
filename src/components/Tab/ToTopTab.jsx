import React, { useState, useEffect, useContext } from 'react';
import TabContext from '@/context/tab';

const ToTopTab = props => {
  const TabC = useContext(TabContext);

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
    <div className={`ttt_container ${tabTop ? 'ttt_top': undefined}`}>
      <div className="ttt_wrapper">
        {props.tabJson.map(Data => {
          return (
            <button
              // className={'funding_doing_btn' + (state.tabMenu === 'doing' ? ' btn_active' : '')}
              className="ttt_start_btn"
              onClick={() => TabC.action.setFundingTab(Data.tabId)}
            >
              {Data.tabName}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ToTopTab;
