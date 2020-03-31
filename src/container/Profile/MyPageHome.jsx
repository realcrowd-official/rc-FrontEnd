import React, { useState, useContext, useEffect } from 'react';
import HABContext from '@/context/headerAndBottom';
import ProfileUserInfo from '@/components/Profile/ProfileUserInfo';
import ToTopTab from '@/components/Tab/ToTopTab';
import FeedCardView from '@/components/FeedCardView';
import ProjectCardView from '@/components/ProjectCardView';
import Footer from '@/components/Footer';

import { mPHAxios } from '@/lib/api';

const MyPageHome = () => {
  const { state, action } = useContext(HABContext);
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    action.setHeaderType('regular');
    action.setBottomType('true');
    action.setPath('profile');
  }, []);

  useEffect(() => {
    async function axios() {
      const ans = await mPHAxios({
        token: JSON.parse(localStorage.getItem('token')).token
      });
      console.log(ans);
      if (ans.data.statusCode == 200) {
        await setProfile(ans.data.profileInfo);
      } else {
        localStorage.removeItem('token');
      }
    }
    axios();
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
