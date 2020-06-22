import React, { createContext, useState } from 'react';

const TabContext = createContext({
  state: { tabMenu: 'doing', fundingTab: 'story', myPageTab: 'funding' },
  action: {
    setTabMenu: () => {},
    setFundingTab: () => {},
    setMyPageTab: () => {},
  },
});

const { Consumer: TabConsumer } = TabContext;

const TabProvider = ({ children }) => {
  const [tabMenu, setTabMenu] = useState('doing');
  const [fundingTab, setFundingTab] = useState('story');
  const [myPageTab, setMyPageTab] = useState('funding');

  const value = {
    state: { tabMenu, fundingTab, myPageTab },
    action: { setTabMenu, setFundingTab, setMyPageTab },
  };

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
};

export { TabProvider, TabConsumer };

export default TabContext;
