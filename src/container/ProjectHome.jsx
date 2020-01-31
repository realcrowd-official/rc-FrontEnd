import React, {useContext} from 'react';
import TabBar from '../component/TabBar'
import DoingFeed from './DoingFeed';
import TabContext from '../context/tab';
import ReservateFeed from './ReservateFeed';

const ProjectHome = () => {
    const {state}=useContext(TabContext);
    return (
        <div className="home_body">
            <TabBar/>
            {state.tabMenu==='doing' ? <DoingFeed/> : <ReservateFeed/>}
        </div>
    );
};

export default ProjectHome;