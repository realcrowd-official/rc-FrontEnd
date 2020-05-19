import React, { createContext, useState } from 'react';

const HABContext = createContext({
  state: {
    headerType: 'regular',
    notiType: 'regular',
    bottomType: 'true',
    addType: '',
    path: 'home',
  },
  action: {
    setHeaderType: () => {},
    setNotiType: () => {},
    setBottomType: () => {},
    setAddType: () => {},
    setPath: () => {},
  },
});

const { Consumer: HABConsumer } = HABContext;

const HABProvider = ({ children }) => {
  const [headerType, setHeaderType] = useState('regular');
  const [notiType, setNotiType] = useState('regular');
  const [bottomType, setBottomType] = useState('true');
  const [addType, setAddType] = useState('');
  const [path, setPath] = useState('home');

  const value = {
    state: { headerType, notiType, bottomType, addType, path },
    action: { setHeaderType, setNotiType, setBottomType, setAddType, setPath },
  };

  return <HABContext.Provider value={value}>{children}</HABContext.Provider>;
};

export { HABProvider, HABConsumer };

export default HABContext;
