import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import BSContext from '@/context/bottomSheet';

import { isLogin } from '@/lib/auth';

const PrivateRouter = ({ path, children, ...rest }) => {
  const BS = useContext(BSContext);
  const toLogin = toPath => {
    BS.action.setBottomSheet(true);
    localStorage.setItem(
      'historyPath',
      JSON.stringify({
        path: toPath
      })
    );
  };
  return (
    <Route
      {...rest}
      render={({ location }) => (isLogin() ? children : toLogin(path))}
    />
  );
};

export default PrivateRouter;
