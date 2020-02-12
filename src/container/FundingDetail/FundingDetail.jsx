import React, { useEffect, useContext } from 'react';

import FundingDetailMain from './FundingDetailMain';
import FundingDetailStory from './FundingDetailStory';
import FundingDetailCommunity from './FundingDetailCommunity';
import FundingDetailInfo from './FundingDetailInfo';

import Footer from '../../components/Footer';

import HABContext from '../../context/headerAndBottom';
import FDTabContext from '../../context/tab';
import FundingButton from '../../components/Funding/FundingButton';

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
      
      <div className={FDTab.state.fundingTab === "story" && `fd_story_footer`}>
      <Footer />
      </div>
      {FDTab.state.fundingTab === 'story' && <FundingButton/>}
    </div>
  );
};
export default FundingDetail;
