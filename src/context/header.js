import React, { createContext, useState } from 'react';

const HeaderContext = createContext({
    state: { headerType: 'regular' },
    action: {
        setHeaderType: () => {}
    }
});

const { Consumer: HeaderConsumer } = HeaderContext;

const HeaderProvider = ({ children }) => {
    const [ headerType, setHeaderType ] = useState('regular');

    const value = {
        state: { headerType },
        action : { setHeaderType }
    };

    return (
        <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
    )
};

export { HeaderProvider, HeaderConsumer };

export default HeaderContext;