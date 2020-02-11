import React, { useEffect, useContext } from 'react';

import FundingDetailMain from './FundingDetailMain'

import HABContext from '../../context/headerAndBottom';
import FDTabContext from '../../context/tab';
import FundingDetailStory from './FundingDetailStory';
import FundingDetailComunity from './FundingDetailComunity';
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
      <FundingDetailMain/>
      <div className="fd_sub_body">
        {FDTab.state.fundingTab === 'story' && <FundingDetailStory/>}
        {FDTab.state.fundingTab === 'comunity' && <FundingDetailComunity/>}
        {FDTab.state.fundingTab === 'info' && <FundingDetailInfo/>}
      </div>
    </div>
  )
};
export default FundingDetail;
