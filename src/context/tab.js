import React, { createContext, useState } from 'react';

const TabContext = createContext({
  state: { tabMenu: 'doing', fundingTab: 'story' },
  action: {
    setTabMenu: () => {},
    setFundingTab: () => {}
  }
});

const { Consumer: TabConsumer } = TabContext;

const TabProvider = ({ children }) => {
  const [tabMenu, setTabMenu] = useState('doing');
  const [fundingTab, setFundingTab] = useState('story');

  const value = {
    state: { tabMenu, fundingTab },
    action: { setTabMenu, setFundingTab }
  };

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
};

export { TabProvider, TabConsumer };

export default TabContext;
