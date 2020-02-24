import React, { createContext, useState } from 'react';

const TabContext = createContext({
  state: { tabMenu: 'reservate', fundingTab: 'community' },
  action: {
    setTabMenu: () => {},
    setFundingTab: () => {}
  }
});

const { Consumer: TabConsumer } = TabContext;

const TabProvider = ({ children }) => {
  const [tabMenu, setTabMenu] = useState('reservate');
  const [fundingTab, setFundingTab] = useState('community');

  const value = {
    state: { tabMenu, fundingTab },
    action: { setTabMenu, setFundingTab }
  };

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
};

export { TabProvider, TabConsumer };

export default TabContext;
