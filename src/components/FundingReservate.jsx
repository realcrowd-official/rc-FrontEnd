import React from 'react';
import { convertDate } from '@/global/utils.ts';

const FundingReservate = props => {
  const parsingDate = convertDate(props.startDate);
  return (
    <div>
      <button className="reservate_btn">시작하면 알림 받기</button>
      <div className="start_text_div">
        <span className="start_date_span">
          {parsingDate[0]}월 {parsingDate[1]}일 {parsingDate[4]}요일 오전{' '}
          {parsingDate[2]}시
        </span>
        <span className="start_span">시작</span>
      </div>
    </div>
  );
};

export default FundingReservate;
