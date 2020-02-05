import React, { useContext, useEffect } from 'react';
import FeedCarousel from '../component/FeedCarousel';
import FeedCardView from '../component/FeedCardView';
import HABContext from '../context/headerAndBottom';

const FeedHome = () => {
  const { action } = useContext(HABContext);
  useEffect(() => {
    action.setHeaderType('regular');
    action.setBottomType('true');
    action.setPath('home');
  });
  return (
    <div className="home_body">
      <FeedCarousel />
      <FeedCardView />
    </div>
  );
};

export default FeedHome;
