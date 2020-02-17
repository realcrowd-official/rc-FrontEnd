export const numberWithCommas = (x: number) =>
  x && x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const twitterShare = (title: string, url: string) => {
  let escapeAmpersand = (text: string) => {
    return text.replace(/\&/g, '%26').replace(/&amp;/g, '%26');
  };

  window.open(
    `https://twitter.com/intent/tweet?text=${escapeAmpersand(
      title
    )}%0a${escapeAmpersand(url)}`,
    '_blank'
  );
};
