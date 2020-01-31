import React from 'react';
import FeedCarousel from '../component/FeedCarousel';
import FeedCardView from '../component/FeedCardView';

const FeedHome = () => {
    return (
        <div className="home_body">
            <FeedCarousel/>
            <FeedCardView/>
        </div>
    );
};

export default FeedHome;