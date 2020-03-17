import React from 'react';

import { numberWithCommas } from '@/global/utils.ts';

import FundingProgress from '@/components/FundingProgress';
import ShareBtn from '@/components/ShareBtn';
import ActionBtn from '@/components/ActionBtn';
import ToTopTab from '@/components/Tab/ToTopTab';

import { convertDate, leftDay } from '@/lib/date';

const FundingDetailMain = props => {
  const tabJson = [
    { tabName: '스토리', tabId: 'story' },
    { tabName: '커뮤니티', tabId: 'community' },
    { tabName: '정보', tabId: 'info' }
  ];
  const item = props.value;
  const convDate = convertDate(item.dueDate);
  console.log(props.value);
  return (
    <div className="fd_main_body">
      <div className="funding_detail_main_img_div">
        <img
          className="funding_detail_main_img"
          src="https://via.placeholder.com/150"
          alt=""
        />
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
          <p>{item.title}</p>
        </div>
        <div className="funding_detail_current_fund_div">
          <div>
            <div>
              <p className="funding_detail_current_fund_fix_text">
                모인 후원금
              </p>
            </div>
            <div>
              <p className="funding_detail_current_fund_change_text">
                {numberWithCommas(item.aggregateAmount)}원
              </p>
            </div>
          </div>
          <div>
            <div>
              <p className="funding_detail_current_fund_fix_text">
                후원 종료까지
              </p>
            </div>
            <div>
              <p className="funding_detail_current_fund_change_text">
                {leftDay(item.dueDate)}
              </p>
            </div>
          </div>
          <div>
            <div>
              <p className="funding_detail_current_fund_fix_text">후원자</p>
            </div>
            <div>
              <p className="funding_detail_current_fund_change_text">
                {numberWithCommas(item.fundingMember.length)}명
              </p>
            </div>
          </div>
        </div>
        <div className="fd_notice_div">
          <p>
            목표 금액 <span>{numberWithCommas(item.targetAmount)}원</span>이
            모이면, 프로젝트 후원 종료 다음날인{' '}
            <span>{`${convDate[6]}년 ${convDate[0]}월 ${convDate[1]}일`}</span>{' '}
            결제가 진행됩니다.
          </p>
        </div>

        <div className="fd_funding_progress">
          <FundingProgress
            id={item._id}
            aggregate={item.aggregateAmount}
            target={item.targetAmount}
            dueDate={item.dueDate}
          />
        </div>

        <div className="fd_funding_btn_div">
          <ActionBtn aText="프로젝트 후원하기" />
          <ShareBtn />
        </div>
      </div>
      <ToTopTab tabJson={tabJson} />
    </div>
  );
};

export default FundingDetailMain;
