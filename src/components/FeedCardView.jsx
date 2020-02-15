import React from 'react';
import Slick from 'react-slick';
import FundingProgress from '@/components/FundingProgress';
import icHeart from '@/img/feedCard/ic-heart-stroke-black.svg';
import icComment from '@/img/feedCard/ic-comment-stroke-black.svg';
import icShare from '@/img/feedCard/ic-share-stroke-black.svg';

const FeedCardView = () => {
  const carouselSetting = {
    dots: false,
    infinite: false,
    speed: 500,
    slideToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="feed_card_view_div">
      <div className="feed_card_view_header">
        <img
          className="feed_card_view_thumnail feed_card_view_header_margin"
          src="https://via.placeholder.com/150"
        />
        <div className="feed_card_view_header_margin">
          <div className="feed_card_view_header_maker_name">메이커닉네임</div>
          <div className="feed_card_view_header_upload_time">1일 전</div>
        </div>
        <button className="feed_card_view_header_margin feed_card_view_header_button feed_card_view_header_button_text">
          팔로우
        </button>
      </div>
      <Slick className="margin_auto width_ninth height_ninth feed_card_view_image_slick">
        <img
          className="feed_card_view_image width_ninth height_ninth"
          src="https://via.placeholder.com/150"
        />
      </Slick>
      <div className="feed_card_view_funding_div">
        <img className="feed_card_view_funding_img" src="https://via.placeholder.com/150" alt="" />
        <div className="feed_card_view_funding_header_text_div">
          <p className="feed_card_view_funding_title">
            이미지 크기 고정, 타이틀 텍스트 너비 가변, 최대 3줄 이후 ellipsis 3세줄테스트 3줄 테스트
            3줄 테스트 3줄 테스트 3줄 테스트 3줄 테스트 3줄 테스트 3줄 테스트 3줄 테스트3줄 테스트
          </p>
          <p className="feed_card_view_funding_user">메이커 닉네임</p>
        </div>
      </div>
      <FundingProgress />
      <div className="feed_card_view_funding_explain_div">
        <p className="feed_card_view_funding_explain_text">
          피드 카드의 본문 내용은 최대 3줄까지 숨김 없이 보여지며, 3줄이 넘어가게 될 경우에는 다음
          예시와 같이 ellipsis 더 보기 처리가 됩니다 ...
        </p>
      </div>
      {/* 더보기는 추후 구현 */}
      <div className="feed_card_view_funding_like_comment_div">
        <div className="feed_card_view_funding_like_comment_p">
          <span>좋아요 96 ㆍ 댓글 32</span>
        </div>
      </div>
      <div className="feed_card_view_funding_icon_div">
        <img src={icHeart} alt="" />
        <img src={icComment} alt="" />
        {/* 공유버튼 누르면 바텀시트 팝업 */}
        <img src={icShare} alt="" />
      </div>
    </div>
  );
};

export default FeedCardView;
