import React, { useState, useContext, useEffect } from 'react';
import HABContext from '@/context/headerAndBottom';
import TABContext from '@/context/tab';
import ACContext from '@/context/account';
import ProfileUserInfo from '@/components/Profile/ProfileUserInfo';
import ToTopTab from '@/components/Tab/ToTopTab';
import FeedCardView from '@/components/FeedCardView';
import ProjectCardView from '@/components/ProjectCardView';
import Footer from '@/components/Footer';
import FundingList from '@/components/Profile/FundingList';
import CommunityList from '@/components/Profile/CommunityList';

import { mPHAxios } from '@/lib/api';

const MyPageHome = () => {
  const { state, action } = useContext(HABContext);
  const TABCONTEXT = useContext(TABContext);
  const ACCONTEXT = useContext(ACContext);
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    action.setHeaderType('regular');
    action.setBottomType('true');
    action.setPath('profile');
    action.setNotiType('mypage');
    TABCONTEXT.action.setMyPageTab('funding');
    // return action.setNotiType('regular');
  }, []);

  useEffect(() => {
    async function axios() {
      const ans = await mPHAxios({
        token: JSON.parse(localStorage.getItem('token')).token,
      });

      if (ans.data.statusCode == 200) {
        await setProfile(ans.data.profileInfo);
        await ACCONTEXT.action.setInfo(ans.data.profileInfo);
        console.log(ans.data.profileInfo);
      } else {
        localStorage.removeItem('token');
      }
    }
    axios();
  }, []);

  const tabJson = [
    { tabName: '후원내역', tabId: 'mpFunding' },
    { tabName: '커뮤니티', tabId: 'mpCommunity' },
  ];

  return (
    <div className="home_body">
      <div className="mph_user_div">
        {profile.length === 0 ? null : (
          <ProfileUserInfo value={profile} type="myPage" />
        )}
      </div>
      <ToTopTab tabJson={tabJson} type={'myPage'} />
      <div className="mph_content_div">
        {TABCONTEXT.state.myPageTab == 'mpFunding' ? (
          <FundingList />
        ) : (
          <CommunityList />
        )}
        {/* <FeedCardView /> */}
        {/* <ProjectCardView /> */}
      </div>
      <Footer />
    </div>
  );
};

export default MyPageHome;
