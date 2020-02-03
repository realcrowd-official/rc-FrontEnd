import React,{ useEffect, useContext } from 'react';
import HABContext from '../context/headerAndBottom';

const FundingDetail = () => {
    const { action } = useContext(HABContext);
    useEffect(() => {
        action.setBottomType('false');
        action.setHeaderType('back');
    })
    return (
        <div className="home_body">
            <div className="funding_detail_main_img_div">
                <img className="funding_detail_main_img" src="https://via.placeholder.com/150" alt=""/>
            </div>
            <div className="funding_detail_explain_div">
                <div className="funding_detail_maker_header_div">
                    <div className="funding_detail_maker_header_thumnail_div">
                        <img className="funding_detail_maker_header_thumnail"src="https://via.placeholder.com/150" alt=""/>
                    </div>
                    <div className="funding_detail_maker_name_div">
                        <p>메이커 닉네임</p>
                    </div>
                    <div className="funding_detail_maker_follow_btn_div">
                        <button>
                            <p>팔로우</p>
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default FundingDetail;