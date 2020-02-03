import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../img/BottomNav/ic-tab-feed-stroke-black.svg';
import homeIconPrimary from '../img/BottomNav/ic-tab-feed-stroke-primary.svg';
import feedIcon from '../img/BottomNav/ic-tab-projects-stroke-black.svg';
import feedIconPrimary from '../img/BottomNav/ic-tab-projects-stroke-primary.svg';
import profileIcon from '../img/BottomNav/ic-tab-profile-stroke-black.svg';
import profileIconPrimary from '../img/BottomNav/ic-tab-profile-stroke-primary.svg';

import HABContext from '../context/headerAndBottom';

const BottomNav = () => {
    const [ nowPath, setNowPath ] = useState('home');
    const habContext = useContext(HABContext);
    console.log(habContext.state.bottomType);
    return (
        <>
        {
        habContext.state.bottomType==="true" ? 
        <div className="BottomNav_container max_container">
            <div className="BottomNav_wrapper">
                <Link to="/" 
                className={"home_icon" + (nowPath==='home' ? ' current_path' : "")} 
                onClick={()=>setNowPath("home")}>
                    <img src={nowPath==='home' ? homeIconPrimary : homeIcon} alt="피드"/>
                    <p>피드</p>
                </Link>
                <Link to="/project" 
                className={"feed_icon" + (nowPath==='project' ? ' current_path' : "")} 
                onClick={()=>setNowPath("project")}>
                    <img src={nowPath === 'project' ? feedIconPrimary : feedIcon} alt="프로젝트"/>
                    <p>프로젝트</p>
                </Link>
                <Link to="/profile"
                className={"profile_icon" + (nowPath==='profile' ? ' current_path' : "")} 
                onClick={()=>setNowPath("profile")}>
                    <img src={nowPath === 'profile' ? profileIconPrimary : profileIcon} alt="프로필"/>
                    <p>프로필</p>
                </Link>
            </div>
        </div>
        :
        null
        }
        
        </>
    );
};

export default BottomNav;