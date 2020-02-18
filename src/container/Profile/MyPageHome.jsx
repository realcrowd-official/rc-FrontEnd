/* eslint-disable */

import React, { useContext, useEffect } from 'react';
import HABContext from '@/context/headerAndBottom';
import ProfileUserInfo from '@/components/Profile/ProfileUserInfo';
import ToTopTab from '@/components/Tab/ToTopTab';

const MyPageHome = () => {
  const { state, action } = useContext(HABContext);
  useEffect(() => {
    action.setHeaderType('regular');
    action.setBottomType('true');
    action.setPath('profile');
  }, [action]);

  const tabJson = [
    { tabName: '후원내역', tabId: 'mpFunding' },
    { tabName: '커뮤니티', tabId: 'mpCommunity' }
  ];
  return (
    <div className="home_body">
      <div className="mph_user_div">
        <ProfileUserInfo />
      </div>
      <ToTopTab tabJson={tabJson}/>
    </div>
  );
};

export default MyPageHome;
