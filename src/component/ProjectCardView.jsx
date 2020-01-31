import React, { useContext } from 'react';
import FundingProgress from './FundingProgress';
import TabContext from '../context/tab';
import FundingReservate from './FundingReservate';

const ProjectCardView = () => {
    const {state} = useContext(TabContext);
    return (
        <div className="card_view_container max_container">
            <div className="card_view_img_div">
                <img className="card_view_img" src="https://via.placeholder.com/150"></img> 
            </div>
            <div className="card_view_user_profile_img_div card_view_funding_left_margin">
                <img className="card_view_user_profile_img" src="https://via.placeholder.com/150"></img>
            </div>
            <div className="card_view_funding_information_div card_view_funding_left_margin">
                <p>
                    펀딩 타이틀은 최대 2줄이며,<br/> 2줄 이상부터는 ellipsis 처리 됩니다. <br/> 이것은 3번째 줄입니다.
                </p>
            </div>
            <div className="card_view_funding_user_name_div card_view_funding_left_margin">
                <p>메이커 닉네임</p>
            </div>
            <div className="card_view_funding_left_margin">
                {state.tabMenu==="doing"? <FundingProgress/>:<FundingReservate/>}
            </div>
        </div>
    );
};

export default ProjectCardView;