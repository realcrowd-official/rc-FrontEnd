import React, { useContext, useEffect } from 'react';
import FeedCarousel from '@/components/FeedCarousel';
import FeedCardView from '@/components/FeedCardView';
import Footer from '@/components/Footer';

import HABContext from '@/context/headerAndBottom';

const FeedHome = () => {
  const { action } = useContext(HABContext);
  useEffect(() => {
    action.setHeaderType('regular');
    action.setBottomType('true');
    action.setPath('home');
  });
  return (
    <div className="home_body">
      {/* <FeedCarousel />
      <FeedCardView /> */}
      <Footer />
    </div>
  );
};

export default FeedHome;
