import React, { createContext, useState } from 'react';

const AuthContext = createContext({
    state: { authToken: localStorage.getItem('token') 
    ? JSON.parse(localStorage.getItem('token')).token : null },
    action: {
        setAuthToken: () => {}
    }
});

const { Consumer: AuthConsumer } = AuthContext;

const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(null);

    const value = {
        state: { authToken },
        action: { setAuthToken }
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

export { AuthProvider, AuthConsumer };

export default AuthContext;