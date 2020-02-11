import React, { useEffect, useContext } from 'react';

import FundingDetailMain from './FundingDetailMain';
import FundingDetailStory from './FundingDetailStory';
import FundingDetailCommunity from './FundingDetailCommunity';
import FundingDetailInfo from './FundingDetailInfo';

import ProfileUserInfo from '../../components/Profile/ProfileUserInfo';
import Footer from '../../components/Footer';

import HABContext from '../../context/headerAndBottom';
import FDTabContext from '../../context/tab';

const FundingDetail = () => {
  const { action } = useContext(HABContext);
  const FDTab = useContext(FDTabContext);
  useEffect(() => {
    action.setBottomType('false');
    action.setHeaderType('back');
  });

  return (
    <div className="home_body_nobn">
      <FundingDetailMain />
      <div className="fd_sub_body">
        {FDTab.state.fundingTab === 'story' && <FundingDetailStory />}
        {FDTab.state.fundingTab === 'community' && <FundingDetailCommunity />}
        {FDTab.state.fundingTab === 'info' && <FundingDetailInfo />}
      </div>
      <div className="fd_user_body">
        <h2>메이커 소개</h2>
        <ProfileUserInfo />
      </div>
      <Footer />
    </div>
  );
};
export default FundingDetail;
