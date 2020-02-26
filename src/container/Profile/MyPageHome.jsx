import React, { useState, useContext, useEffect } from 'react';
import HABContext from '@/context/headerAndBottom';
import ProfileUserInfo from '@/components/Profile/ProfileUserInfo';
import ToTopTab from '@/components/Tab/ToTopTab';
import FeedCardView from '@/components/FeedCardView';
import ProjectCardView from '@/components/ProjectCardView';
import Footer from '@/components/Footer';
import Axios from 'axios';

const MyPageHome = () => {
  const { state, action } = useContext(HABContext);
  const [profile, setProfile] = useState([]);
  // const url = 'http://localhost:7777/api/account/profile';
  const url = 'http://3.135.237.171:7777/api/account/profile';

  useEffect(() => {
    action.setHeaderType('regular');
    action.setBottomType('true');
    action.setPath('profile');
  }, []);

  useEffect(() => {
    Axios.get(url, {
      headers: {
        'x-access-token': JSON.parse(localStorage.getItem('token')).token
      }
    }).then(res => {
      setProfile(res.data.profileInfo);
    });
  }, []);

  const tabJson = [
    { tabName: '후원내역', tabId: 'mpFunding' },
    { tabName: '커뮤니티', tabId: 'mpCommunity' }
  ];

  return (
    <div className="home_body">
      <div className="mph_user_div">
        {profile.length === 0 ? null : <ProfileUserInfo value={profile} />}
      </div>
      <ToTopTab tabJson={tabJson} />
      <div className="mph_content_div">
        {/* <FeedCardView /> */}
        {/* <ProjectCardView /> */}
      </div>
      <Footer />
    </div>
  );
};

export default MyPageHome;
