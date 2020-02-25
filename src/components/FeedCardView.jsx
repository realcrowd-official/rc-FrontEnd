import React from 'react';
import Slick from 'react-slick';

//components
import FundingProgress from '@/components/FundingProgress';
import UserHeader from '@/components/Post/UserHeader';
import PostSlick from '@/components/Post/PostSlick';

import {
  IC_HEART_STROKE_BLACK,
  IC_COMMENT_STROKE_BLACK,
  IC_SHARE_STROKE_BLACK
} from '@/global/img/feedCard';

// import icHeart from '@/img/feedCard/ic-heart-stroke-black.svg';
// import icComment from '@/img/feedCard/ic-comment-stroke-black.svg';
// import icShare from '@/img/feedCard/ic-share-stroke-black.svg';

const FeedCardView = props => {
  const carouselSetting = {
    dots: false,
    infinite: false,
    speed: 500,
    slideToShow: 1,
    slidesToScroll: 1
  };
  console.log(props.value);
  return (
    <div className="feed_card_view_div">
      <UserHeader
        maker={props.value.maker}
        uploadDate={props.value.uploadDate}
      />
      <PostSlick />
      <div className="feed_card_view_funding_div">
        <img
          className="feed_card_view_funding_img"
          src="https://via.placeholder.com/150"
          alt=""
        />
        <div className="feed_card_view_funding_header_text_div">
          <p className="feed_card_view_funding_title">
            {props.value.fundingItem.title}
          </p>
          <p className="feed_card_view_funding_user">
            {props.value.maker.nickName}
          </p>
        </div>
      </div>
      <FundingProgress
        aggregate={props.value.fundingItem.aggregateAmount}
        target={props.value.fundingItem.targetAmount}
        dueDate={props.value.fundingItem.dueDate}
      />
      <div className="feed_card_view_funding_explain_div">
        <p className="feed_card_view_funding_explain_text">
          {props.value.content}
        </p>
      </div>
      {/* 더보기는 추후 구현 */}
      <div className="feed_card_view_funding_like_comment_div">
        <div className="feed_card_view_funding_like_comment_p">
          <span>
            좋아요 {props.value.likeMember.length} ㆍ 댓글{' '}
            {props.value.comment.length}
          </span>
        </div>
      </div>
      <div className="feed_card_view_funding_icon_div">
        <img src={IC_HEART_STROKE_BLACK} alt="" />
        <img src={IC_COMMENT_STROKE_BLACK} alt="" />
        {/* 공유버튼 누르면 바텀시트 팝업 */}
        <img src={IC_SHARE_STROKE_BLACK} alt="" />
      </div>
    </div>
  );
};

export default FeedCardView;
