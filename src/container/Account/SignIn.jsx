import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useHistory, Redirect } from 'react-router-dom';

import resolveJWT from '@/lib/resolveJwt';

import AuthContext from '@/context/auth';
import BSContext from '@/context/bottomSheet';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SignIn = () => {
  const auth = useContext(AuthContext);
  const BS = useContext(BSContext);

  const token = useQuery().get('token');
  const decodedToken = resolveJWT(token);
  const history = useHistory();
  const signInUri = 'http://localhost:7777/api/account/signIn';
  // const signInUri = 'http://3.135.237.171:7777/api/account/signIn';
  useEffect(() => {
    axios
      .post(signInUri, {
        id: decodedToken.id
      })
      .then(res => {
        console.log(res.data.oid);
        auth.action.setAuthToken(res.data.ans);
        localStorage.setItem(
          'token',
          JSON.stringify({
            token: res.data.ans
          })
        );
        localStorage.setItem(
          'oid',
          JSON.stringify({
            oid: res.data.oid
          })
        );
        history.push(JSON.parse(localStorage.getItem('historyPath')).path);
      });
  });
  return <div></div>;
};

export default SignIn;
