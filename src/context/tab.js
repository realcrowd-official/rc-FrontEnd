import React, { createContext, useState } from 'react';

const TabContext = createContext({
    state: { tabMenu: 'reservate' },
    action: {
        setTabMenu: () => {}
    }
});

const { Consumer: TabConsumer } = TabContext;

const TabProvider = ({ children }) => {
    const [ tabMenu, setTabMenu ] = useState('reservate');
    
    const value = {
        state: { tabMenu },
        action: { setTabMenu }
    };

    return (
        <TabContext.Provider value={value}>{children}</TabContext.Provider>
    )
};



export { TabProvider, TabConsumer };

export default TabContext;