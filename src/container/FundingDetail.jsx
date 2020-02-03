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

                <div className="funding_detail_title">
                    <p>펀딩 상세페이지 내의 펀딩 타이틀은 글줄 수의 제한이 없습니다.</p>
                </div>

                <div className="funding_detail_current_fund_div">
                    <div>
                        <div>
                            <p className="funding_detail_current_fund_fix_text">모인 후원금</p>
                        </div>
                        <div>
                            <p className="funding_detail_current_fund_change_text">339,000원</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="funding_detail_current_fund_fix_text">후원 종료까지</p>
                        </div>
                        <div >
                            <p className="funding_detail_current_fund_change_text">14일</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="funding_detail_current_fund_fix_text">후원자</p>
                        </div>
                        <div>
                            <p className="funding_detail_current_fund_change_text">128명</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default FundingDetail;