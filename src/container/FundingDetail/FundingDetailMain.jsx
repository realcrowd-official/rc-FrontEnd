import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import FundingProgress from '../../components/FundingProgress';
import ShareBtn from '../../components/ShareBtn';
import ActionBtn from '../../components/ActionBtn';
import FundingDetailTab from './FundingDetailTab';

const FundingDetailMain = () => {
  const tabRef = useRef(null);
  const [scroll, setScroll] = useState(0);
  const [tabTop, setTabTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    tabTop ^ (scroll.scrollTop >= 800) && setTabTop(!tabTop);
  }, [scroll]);

  const onScroll = e => {
    const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop);
    setScroll({ scrollTop });
  };

  return (
    <div className="fd_main_body">
      <div className="funding_detail_main_img_div">
        <img className="funding_detail_main_img" src="https://via.placeholder.com/150" alt="" />
      </div>
      <div className="funding_detail_explain_div">
        <div className="funding_detail_maker_header_div">
          <div className="funding_detail_maker_header_thumnail_div">
            <img
              className="funding_detail_maker_header_thumnail"
              src="https://via.placeholder.com/150"
              alt=""
            />
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
          <p>펀딩 상세페이지 내의 펀딩 타이틀은 글줄 수의 제한이 없습니다.</p>
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
            <div>
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
        <div className="fd_notice_div">
          <p>
            목표 금액 <span>1,000,000원</span>이 모이면, 프로젝트 후원 종료 다음날인{' '}
            <span>2020년 4월 5일 일요일</span> 결제가 진행됩니다.
          </p>
        </div>

        <div className="fd_funding_progress">
          <FundingProgress />
        </div>

        <div className="fd_funding_btn_div">
          <ActionBtn aText="프로젝트 후원하기" />
          <ShareBtn />
        </div>
      </div>
      <FundingDetailTab ref={tabRef} sendClass={tabTop ? 'fd_tab_top' : 'fd_tab_middle'} />
    </div>
  );
};

export default FundingDetailMain;
