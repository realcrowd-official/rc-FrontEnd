import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useHistory } from 'react-router-dom';

import resolveJWT from '../../lib/resolveJwt';

import AuthContext from '../../context/auth';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const SignIn = () => {
    const auth = useContext(AuthContext);
    const token = useQuery().get('token');
    const decodedToken = resolveJWT(token);
    const history = useHistory()
    const signInUri = "http://localhost:7777/api/account/signIn";
    // const signUpUri = "http://3.135.237.171:7777/api/account/signIn";

    useEffect(() => {
        axios.post(signInUri, {
            id: decodedToken.id
        })
        .then((res) => {
            auth.action.setAuthToken(res.data.ans);
            localStorage.setItem('token', JSON.stringify({
                token: res.data.ans
            }));
            history.push('/');
        })
    })
    return (
        <div>
            
        </div>
    );
};

export default SignIn;