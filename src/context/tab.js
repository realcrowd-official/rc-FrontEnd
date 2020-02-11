import React, { createContext, useState } from 'react';

const TabContext = createContext({
  state: { tabMenu: 'doing' },
  action: {
    setTabMenu: () => {}
  }
});

const { Consumer: TabConsumer } = TabContext;

const TabProvider = ({ children }) => {
  const [tabMenu, setTabMenu] = useState('doing');

  const value = {
    state: { tabMenu },
    action: { setTabMenu }
  };

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
};

export { TabProvider, TabConsumer };

export default TabContext;
