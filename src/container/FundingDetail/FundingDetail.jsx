import React, { useEffect, useContext } from 'react';

import FundingProgress from '../../components/FundingProgress';
import ShareBtn from '../../components/ShareBtn';
import ActionBtn from '../../components/ActionBtn';
import FundingDetailMain from './FundingDetailMain';


import HABContext from '../../context/headerAndBottom';
import FDTabContext from '../../context/tab';
import FundingDetailStory from './FundingDetailStory';
import FundingDetailCommunity from './FundingDetailCommunity';
import FundingDetailInfo from './FundingDetailInfo';

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
        {FDTab.state.fundingTab === 'story' && <FundingDetailStory/>}
        {FDTab.state.fundingTab === 'community' && <FundingDetailCommunity/>}
        {FDTab.state.fundingTab === 'info' && <FundingDetailInfo/>}
      </div>
    </div>
  );
};
export default FundingDetail;
