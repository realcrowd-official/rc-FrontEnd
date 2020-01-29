import React from 'react';

const tabBar = () => {
    return (
        <div className="tabBar_container">
            <div className="punding_doing_div">
                <p>진행중인 펀딩</p>
            </div>
            <div className="punding_reservate_div">
                <p>예정된 펀딩</p>
            </div>
        </div>
    );
};

export default tabBar;