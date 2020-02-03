import React, {useContext,useEffect} from 'react';
import TabBar from '../component/TabBar'

import DoingFeed from './DoingFeed';
import ReservateFeed from './ReservateFeed';

import TabContext from '../context/tab';
import HABContext from '../context/headerAndBottom';



const ProjectHome = () => {
    const {state}=useContext(TabContext);
    const habContext = useContext(HABContext);
    useEffect(() => {
        habContext.action.setHeaderType('regular');
    });
    return (
        <div className="home_body">
            <TabBar/>
            {state.tabMenu==='doing' ? <DoingFeed/> : <ReservateFeed/>}
        </div>
    );
};

export default ProjectHome;