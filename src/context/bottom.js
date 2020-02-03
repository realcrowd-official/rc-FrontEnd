import React, { createContext, useState } from 'react';

const BottomContext = createContext({
    state: { bottomType: true },
    action: {
        setBottomType: () => {}
    }
});

const { Consumer: BottomConsumer } = BottomContext;

const BottomProvider = ({ children }) => {
    const [ bottomType, setBottomType ] = useState(true);

    const value = {
        state: { bottomType },
        action: { setBottomType }
    };

    return (
        <BottomContext.Provider value={ value }>{ children }</BottomContext.Provider>
    )
};

export { BottomProvider, BottomConsumer };

export default BottomContext;