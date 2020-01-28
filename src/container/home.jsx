import React from 'react';
import Header from './header'
import TabBar from '../component/tabBar'

const home = () => {
    return (
        <div className="home_body">
            <Header/>
            <TabBar/>
            <div/>
        </div>
    );
};

export default home;