import React, { createContext, useState } from 'react';

const BSContext = createContext({
  state: { bottomSheet: false, kindOfBS: 'login' },
  action: {
    setBottomSheet: () => {},
    setKindOfBS: () => {}
  }
});

const { Consumer: BSConsumer } = BSContext;

const BSProvider = ({ children }) => {
  const [bottomSheet, setBottomSheet] = useState(false);
  const [kindOfBS, setKindOfBS] = useState('login');

  const value = {
    state: { bottomSheet, kindOfBS },
    action: { setBottomSheet, setKindOfBS }
  };

  return <BSContext.Provider value={value}>{children}</BSContext.Provider>;
};

export { BSProvider, BSConsumer };

export default BSContext;
