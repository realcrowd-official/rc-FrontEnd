import React, { createContext, useState } from 'react';

const HABContext = createContext({
  state: { headerType: 'regular', bottomType: 'true', path: 'profile' },
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
  const [path, setPath] = useState('profile');

  const value = {
    state: { headerType, bottomType, path },
    action: { setHeaderType, setBottomType, setPath }
  };

  return <HABContext.Provider value={value}>{children}</HABContext.Provider>;
};

export { HABProvider, HABConsumer };

export default HABContext;
