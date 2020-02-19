import React, { createContext, useState } from 'react';

const HABContext = createContext({
  state: { headerType: 'regular', bottomType: 'true', path: 'home' },
  action: {
    setHeaderType: () => {},
    setBottomType: () => {},
    setPath: () => {}
  }
});

const { Consumer: HABConsumer } = HABContext;

const HABProvider = ({ children }) => {
  const [headerType, setHeaderType] = useState('regular');
  const [bottomType, setBottomType] = useState('true');
  const [path, setPath] = useState('home');

  const value = {
    state: { headerType, bottomType, path },
    action: { setHeaderType, setBottomType, setPath }
  };

  return <HABContext.Provider value={value}>{children}</HABContext.Provider>;
};

export { HABProvider, HABConsumer };

export default HABContext;
