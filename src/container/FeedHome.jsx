import React,{useContext, useEffect} from 'react';
import FeedCarousel from '../component/FeedCarousel';
import FeedCardView from '../component/FeedCardView';
import HABContext from '../context/headerAndBottom';

const FeedHome = () => {
    const { state, action } = useContext(HABContext);
    useEffect(() => {
        action.setHeaderType('regular');
    });
    return (
        <div className="home_body">
            <FeedCarousel/>
            <FeedCardView/>
        </div>
    );
};

export default FeedHome;