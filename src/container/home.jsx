import React from 'react';
import Header from './header'
import TabBar from '../component/TabBar'
import FeedCardView from '../component/FeedCardView'
import { TabProvider } from '../context/tab'

const home = () => {
    return (
        <div className="home_body">
            <Header/>
            <TabProvider>
                <TabBar/>
                <FeedCardView/> 
            </TabProvider>
        </div>
    );
};

export default home;