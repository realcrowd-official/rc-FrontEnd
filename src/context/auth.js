import React, { createContext, useState } from 'react';

const AuthContext = createContext({
  state: {
    authToken: localStorage.getItem('token')
      ? JSON.parse(localStorage.getItem('token')).token
      : null,
    isLogin: false
  },
  action: {
    setAuthToken: () => {},
    setIsLogin: () => {}
  }
});

const { Consumer: AuthConsumer } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  const value = {
    state: { authToken, isLogin },
    action: { setAuthToken, setIsLogin }
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthConsumer };

export default AuthContext;
