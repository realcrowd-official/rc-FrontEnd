import React,{useContext, useEffect} from 'react';
import FeedCarousel from '../component/FeedCarousel';
import FeedCardView from '../component/FeedCardView';
import HeaderContext from '../context/header';

const FeedHome = () => {
    const { state, action } = useContext(HeaderContext);
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