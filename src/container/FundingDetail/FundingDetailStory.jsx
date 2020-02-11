import React from 'react';

import quoteIcon from '../../img/fundingDetail/ic-quote-fill-grey.svg'


const FundingDetailStory = () => {
    return (
        <div className="fd_story_div home_container">
            <h1>이곳은 story 타이틀 입니다.</h1>
            <img src="https://via.placeholder.com/150" alt=""/>
            <label htmlFor="img">캡션입니다.</label>

            <h2>서브타이틀입니다.</h2>
            <p>
            본문 P, 14px, regular, b78 <br/>정당은 법률이 정하는 바에 의하여 국가의 보호를 받으며, 국가는 법률이 정하는 바에 의하여 정당운영에 필요한 자금을 보조할 수 있다.
            </p>
            <ol>
            1. 본문 OL, 14px, regular, b78
            </ol>

            <hr/>
            <img src={quoteIcon} alt=""/>
            <p>인용, 16px, regular, b54</p>
            <img src="https://via.placeholder.com/150" alt=""/>
            <label htmlFor="img">캡션입니다.</label>
            <ul>본문 ul 14px regular b78</ul>
            <ul>법관이 중대한 심신상의 장해로 직무를 수행할 수 없을 때에는 법률이 정하는 바에 의하여 퇴직하게 할 수 있다.</ul>
            <a href="">본문 outlink 14px regular primary</a>
        </div>
    );
};

export default FundingDetailStory;