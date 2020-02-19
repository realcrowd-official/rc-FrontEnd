import React from 'react';

import ProfileUserInfo from '@/components/Profile/ProfileUserInfo';
import FundingItem from '@/components/Funding/FundingItem';

import { IC_QUOTE_FILL_GREY } from '@/global/img/fundingDetail';

// import quoteIcon from '@/img/fundingDetail/ic-quote-fill-grey.svg';

const FundingDetailStory = () => {
  return (
    <div className="fd_story_div home_container">
      <h1>이곳은 story 타이틀 입니다.</h1>
      <img src="https://via.placeholder.com/150" alt="" />
      <label htmlFor="img">캡션입니다.</label>

      <h2>서브타이틀입니다.</h2>
      <p>
        군사법원의 조직·권한 및 재판관의 자격은 법률로 정한다. 제2항과 제3항의
        처분에 대하여는 법원에 제소할 수 없다.{' '}
        <b>모든 국민은 근로의 의무를 진다.</b> 국가는 근로의 의무의 내용과
        조건을 민주주의원칙에 따라 법률로 정한다. 대통령의 선거에 관한 사항은
        법률로 정한다. 모든 국민은 건강하고 쾌적한 환경에서 생활할 권리를
        가지며, 국가와 국민은 환경보전을 위하여 노력하여야 한다. 계엄을 선포한
        때에는 <a>대통령은 지체없이 국회에 통고하여야 한다.</a> 헌법재판소는
        법률에 저촉되지 아니하는 범위안에서 심판에 관한 절차, 내부규율과
        사무처리에 관한 규칙을 제정할 수 있다. 지방자치단체는 주민의 복리에 관한
        사무를 처리하고 재산을 관리하며, 법령의 범위안에서 자치에 관한 규정을
        제정할 수 있다.
      </p>
      <ol>
        <li>본문 OL, 14px, regular, b78</li>
        <li>본문 OL, 14px, regular, b78</li>
        <li>본문 OL, 14px, regular, b78</li>
      </ol>

      <hr />
      <img src={IC_QUOTE_FILL_GREY} alt="caption" />
      <p data-caption>
        대통령은 헌법과 법률이 정하는 바에 의하여 국군을 통수한다. 국채를
        모집하거나 예산외에 국가의 부담이 될 계약을 체결하려 할 때에는 정부는
        미리 국회의 의결을 얻어야 한다.
      </p>
      <img src="https://via.placeholder.com/150" alt="" />
      <label htmlFor="img">캡션입니다.</label>
      <ul>
        <li>법률이 정하는 바에 의하여 법관을 둘 수 있다.</li>
        <li>법률이 정하는 바에 의하여 법관을 둘 수 있다.</li>
        <li>법률이 정하는 바에 의하여 법관을 둘 수 있다.</li>
      </ul>
      <a href="">본문 outlink 14px regular primary</a>
      <div className="fd_user_body">
        <h2>메이커 소개</h2>
        <ProfileUserInfo />
      </div>
      <div className="bts_FundingItem noScroll">
        <FundingItem />
      </div>
    </div>
  );
};

export default FundingDetailStory;
