import React from 'react';

const FundingReservate = props => {
  const dateParse = str => {
    const year = str.substr(0, 4);
    const month = str.substr(5, 2);
    const day = str.substr(8, 2);
    const hour = str.substr(11, 2);
    const min = str.substr(14, 2);
    const date = new Date(`${year}-${month}-${day}`).toString().substr(0, 3);
    const koDate = converDate(date);
    return [month, day, hour, min, koDate];
  };
  const converDate = str => {
    console.log(str);
    switch (str) {
      case 'Mon':
        return '월';
      case 'Tue':
        return '화';
      case 'Wen':
        return '수';
      case 'Thu':
        return '목';
      case 'Fri':
        return '금';
      case 'Sat':
        return '토';
      case 'Sun':
        return '일';
      default:
        break;
    }
  };
  const parsingDate = dateParse(props.startDate);
  return (
    <div>
      <button className="reservate_btn">시작하면 알림 받기</button>
      <div className="start_text_div">
        <span className="start_date_span">
          {parsingDate[0]}월 {parsingDate[1]}일 {parsingDate[4]}요일 오전 {parsingDate[2]}시
        </span>
        <span className="start_span">시작</span>
      </div>
    </div>
  );
};

export default FundingReservate;
