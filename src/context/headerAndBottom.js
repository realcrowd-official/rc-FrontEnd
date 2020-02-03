import React, { createContext, useState } from 'react';

const HABContext = createContext({
    state: { headerType: 'regular', bottomType: 'true' },
    action: {
        setHeaderType: () => {},
        setBottomType: () => {}
    }
});

const { Consumer: HABConsumer } = HABContext;

const HABProvider = ({ children }) => {
    const [ headerType, setHeaderType ] = useState('regular');
    const [ bottomType, setBottomType ] = useState('true');

    const value = {
        state: { headerType, bottomType },
        action : { setHeaderType, setBottomType }
    };

    return (
        <HABContext.Provider value={value}>{children}</HABContext.Provider>
    )
};

export { HABProvider, HABConsumer };

export default HABContext;