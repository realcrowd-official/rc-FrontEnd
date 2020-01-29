import React from 'react';
import homeIcon from '../img/bottomsheet/ic-tab-feed-stroke-black.svg'
import feedIcon from '../img/bottomsheet/ic-tab-projects-stroke-black.svg'
import profileIcon from '../img/bottomsheet/ic-tab-profile-stroke-black.svg'

const bottomsheet = () => {
    return (
        <div className="bottomsheet_container max_container">
            <div className="home_icon"><img src={homeIcon} alt=""/>피드</div>
            <div className="feed_icon"><img src={feedIcon} alt=""/>프로젝트</div>
            <div className="profile_icon"><img src={profileIcon} alt=""/>프로필</div>
        </div>
    );
};

export default bottomsheet;