import React from 'react';
import FundingCommunityPost from '@/components/Funding/FundingCommunityPost';
import CommunityPostNotice from '@/components/Post/CommunityPostNotice';
import WriteCommunityPost from '@/components/Post/WriteCommunityPost';

const FundingDetailComunity = () => {
  return (
    <div>
      <CommunityPostNotice />
      <WriteCommunityPost />
      <FundingCommunityPost />
    </div>
  );
};

export default FundingDetailComunity;
