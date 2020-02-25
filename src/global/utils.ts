export const numberWithCommas = (x: number) =>
  x && x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const twitterShare = (title: string, url: string) => {
  let escapeAmpersand = (text: string) =>
    text.replace(/\&/g, '%26').replace(/&amp;/g, '%26');

  window.open(
    `https://twitter.com/intent/tweet?text=${escapeAmpersand(
      title
    )}%0a${escapeAmpersand(url)}`,
    '_blank'
  );
};

export const convertDate = (originDate: string) => {
  const converKoDate = (str: string) => {
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
  const date = new Date(`${year}-${month}-${day}`).toString().substr(0, 3);
  const koDate = converKoDate(date);

  return [month, day, hour, min, koDate];
};
