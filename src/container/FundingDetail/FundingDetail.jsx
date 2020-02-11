import React, { useEffect, useContext } from 'react';

import FundingProgress from '../../components/FundingProgress';
import ShareBtn from '../../components/ShareBtn';
import ActionBtn from '../../components/ActionBtn';
import FundingDetailMain from './FundingDetailMain';

import HABContext from '../../context/headerAndBottom';

const FundingDetail = () => {
  const { action } = useContext(HABContext);
  useEffect(() => {
    action.setBottomType('false');
    action.setHeaderType('back');
  });
  return (
    <div className="home_body_nobn">
      <FundingDetailMain />
    </div>
  );
};
export default FundingDetail;
