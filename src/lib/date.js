export const convertDate = originDate => {
  const converKoDate = str => {
    let returnValue = '';
    switch (str) {
      case 'Mon':
        returnValue = '월';
        break;
      case 'Tue':
        returnValue = '화';
        break;
      case 'Wen':
        returnValue = '수';
        break;
      case 'Thu':
        returnValue = '목';
        break;
      case 'Fri':
        returnValue = '금';
        break;
      case 'Sat':
        returnValue = '토';
        break;
      case 'Sun':
        returnValue = '일';
        break;
      default:
        break;
    }

    return returnValue;
  };
  const year = originDate.substr(0, 4);
  const month = originDate.substr(5, 2);
  const day = originDate.substr(8, 2);
  const hour = originDate.substr(11, 2);
  const min = originDate.substr(14, 2);
  const ISODate = new Date(`${year}-${month}-${day}`);
  const date = ISODate.toString().substr(0, 3);
  const koDate = converKoDate(date);

  return [month, day, hour, min, koDate, ISODate, year];
};

export const leftDay = originDate => {
  const diff =
    new Date() > convertDate(originDate)[5]
      ? new Date() - convertDate(originDate)[5]
      : convertDate(originDate)[5] - new Date();
  const currSec = 1000;
  const currMin = 60 * currSec;
  const currHour = 60 * currMin;
  const currDay = 24 * currHour; // 시 * 분 * 초 * 밀리세컨
  const currMonth = currDay * 30; // 월 만듬
  const currYear = currMonth * 12; // 년 만듬

  return diff / currSec < 0
    ? 'finish'
    : diff / currSec < 60
    ? `${Math.floor(diff / currSec)}초`
    : diff / currMin < 60
    ? `${Math.floor(diff / currMin)}분`
    : diff / currHour < 24
    ? `${Math.floor(diff / currHour)}시간`
    : diff / currDay < 31
    ? `${Math.floor(diff / currDay)}일`
    : diff / currMonth < 12
    ? `${Math.floor(diff / currMonth)}달`
    : `${Math.floor(diff / currYear)}년`;
};
