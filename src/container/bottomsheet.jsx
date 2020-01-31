import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../img/bottomsheet/ic-tab-feed-stroke-black.svg';
import homeIconPrimary from '../img/bottomsheet/ic-tab-feed-stroke-primary.svg';
import feedIcon from '../img/bottomsheet/ic-tab-projects-stroke-black.svg';
import feedIconPrimary from '../img/bottomsheet/ic-tab-projects-stroke-primary.svg';
import profileIcon from '../img/bottomsheet/ic-tab-profile-stroke-black.svg';
import profileIconPrimary from '../img/bottomsheet/ic-tab-profile-stroke-primary.svg';


const Bottomsheet = () => {
    const [ nowPath, setNowPath ] = useState('home');
    return (
        <div className="bottomsheet_container max_container">
            <Link to="/" 
            className={"home_icon" + (nowPath==='home' ? ' current_path' : "")} 
            onClick={()=>setNowPath("home")}>
                <img src={nowPath==='home' ? homeIconPrimary : homeIcon} alt=""/>
                <p>피드</p>
            </Link>
            <Link to="/project" 
            className={"feed_icon" + (nowPath==='project' ? ' current_path' : "")} 
            onClick={()=>setNowPath("project")}>
                <img src={nowPath === 'project' ? feedIconPrimary : feedIcon} alt=""/>
                <p>프로젝트</p>
            </Link>
            <Link 
            className={"profile_icon" + (nowPath==='profile' ? ' current_path' : "")} 
            onClick={()=>setNowPath("profile")}>
                <img src={nowPath === 'profile' ? profileIconPrimary : profileIcon} alt=""/>
                <p>프로필</p>
            </Link>
        </div>
    );
};

export default Bottomsheet;