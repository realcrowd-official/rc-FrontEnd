import React from 'react';

import {
  IC_HEART_STROKE_BLACK,
  IC_COMMENT_STROKE_BLACK,
  IC_SHARE_STROKE_BLACK
} from '@/global/img/feedCard';

// import icHeart from '@/img/feedCard/ic-heart-stroke-black.svg';
// import icComment from '@/img/feedCard/ic-comment-stroke-black.svg';
// import icShare from '@/img/feedCard/ic-share-stroke-black.svg';

const PostIcon = () => {
  return (
    <div className="feed_card_view_funding_icon_div">
      <img src={IC_HEART_STROKE_BLACK} alt="" />
      <img src={IC_COMMENT_STROKE_BLACK} alt="" />
      {/* 공유버튼 누르면 바텀시트 팝업 */}
      <img src={IC_SHARE_STROKE_BLACK} alt="" />
    </div>
  );
};

export default PostIcon;
