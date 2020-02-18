/* eslint-disable */

import React, { useContext, useEffect } from 'react';
import HABContext from '@/context/headerAndBottom';
import ProfileUserInfo from '@/components/Profile/ProfileUserInfo';
import ToTopTab from '@/components/Tab/ToTopTab';
import FeedCardView from '@/components/FeedCardView';
import ProjectCardView from '@/components/ProjectCardView';
import Footer from '@/components/Footer';

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
      <ToTopTab tabJson={tabJson} />
      <div className="mph_content_div">
        {/* <FeedCardView /> */}
        <ProjectCardView />
      </div>
      <Footer />
    </div>
  );
};

export default MyPageHome;
