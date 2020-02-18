import React, { useEffect, useContext } from 'react';

import FundingDetailMain from '@/container/FundingDetail/FundingDetailMain';
import FundingDetailStory from '@/container/FundingDetail/FundingDetailStory';
import FundingDetailCommunity from '@/container/FundingDetail/FundingDetailCommunity';
import FundingDetailInfo from '@/container/FundingDetail/FundingDetailInfo';

import Footer from '@/components/Footer';

import HABContext from '@/context/headerAndBottom';
import FDTabContext from '@/context/tab';
import BSContext from '@/context/bottomSheet';

import FundingButton from '@/components/Funding/FundingButton';

const FundingDetail = () => {
  const { action } = useContext(HABContext);
  const FDTab = useContext(FDTabContext);
  const BS = useContext(BSContext);

  useEffect(() => {
    action.setBottomType('false');
    action.setHeaderType('back');
    BS.action.setKindOfBS('funding');
  });

  return (
    <div className="home_body_nobn">
      <FundingDetailMain />
      <div className="fd_sub_body">
        {FDTab.state.fundingTab === 'story' && <FundingDetailStory />}
        {FDTab.state.fundingTab === 'community' && <FundingDetailCommunity />}
        {FDTab.state.fundingTab === 'info' && <FundingDetailInfo />}
      </div>

      <div
        className={
          FDTab.state.fundingTab === 'story' ? `fd_story_footer` : undefined
        }
      >
        <Footer />
      </div>
      {FDTab.state.fundingTab === 'story' && <FundingButton />}
    </div>
  );
};
export default FundingDetail;
