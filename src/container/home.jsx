import React from 'react';
import Header from './header'
import TabBar from '../component/tabBar'
import FeedCardView from '../component/feedCardView'

const home = () => {
    return (
        <div className="home_body">
            <Header/>
            <TabBar/>
            <FeedCardView/>
        </div>
    );
};

export default home;