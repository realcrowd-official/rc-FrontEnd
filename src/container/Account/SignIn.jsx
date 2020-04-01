import React, { useContext, useEffect } from 'react';
import { useLocation, useHistory, Redirect } from 'react-router-dom';

import resolveJWT from '@/lib/resolveJwt';
import { signInAxios } from '@/lib/api';

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
  useEffect(() => {
    async function axios() {
      const ans = await signInAxios({ id: decodedToken.id });
      auth.action.setAuthToken(ans.data.ans);
      localStorage.setItem(
        'token',
        JSON.stringify({
          token: ans.data.ans
        })
      );
      localStorage.setItem('oid', JSON.stringify({ oid: ans.data.oid }));
      history.push(JSON.parse(localStorage.getItem('historyPath')).path);
    }
    axios();
  });
  return <div></div>;
};

export default SignIn;
