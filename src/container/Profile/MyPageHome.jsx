/* eslint-disable */

import React, { useContext, useEffect } from 'react';
import HABContext from '@/context/headerAndBottom';
import ProfileUserInfo from '@/components/Profile/ProfileUserInfo';

const MyPageHome = () => {
  const { state, action } = useContext(HABContext);
  useEffect(() => {
    action.setHeaderType('regular');
    action.setBottomType('true');
    action.setPath('profile');
  }, [action]);
  return (
    <div className="home_body">
      <div className="mph_user_div">
        <ProfileUserInfo />
      </div>
    </div>
  );
};

export default MyPageHome;
