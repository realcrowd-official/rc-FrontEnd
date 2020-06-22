import React from 'react';

import UserHeader from '@/components/Post/UserHeader';
import PostSlick from '@/components/Post/PostSlick';
import PostLCP from '@/components/Post/PostLikeCommentP';
import PostIcon from '@/components/Post/PostIcon';
import {
  IC_HEART_STROKE_BLACK,
  IC_COMMENT_STROKE_BLACK,
  IC_SHARE_STROKE_BLACK,
} from '@/global/img/feedCard';

const FundingCommunityPost = (props) => {
  return (
    <div className="fcp_div">
      <UserHeader maker={props.value.uid} uploadDate={props.value.updateTime} />
      {props.value.files.length == 0 || <PostSlick value={props.value.files} />}
      <div className="fcp_explain_div">
        <p>
          {props.value.content} {/*<a>더 보기</a>*/}
        </p>
      </div>
      {/* 더보기는 추후 구현 */}
      {/* <PostLCP /> */}
      <div className="feed_card_view_funding_like_comment_div">
        <div className="feed_card_view_funding_like_comment_p">
          <span>좋아요 96 ㆍ 댓글 32</span>
        </div>
      </div>
      {/* <PostIcon /> */}
      <div className="feed_card_view_funding_icon_div">
        <img src={IC_HEART_STROKE_BLACK} alt="" />
        <img src={IC_COMMENT_STROKE_BLACK} alt="" />
        {/* 공유버튼 누르면 바텀시트 팝업 */}
        <img src={IC_SHARE_STROKE_BLACK} alt="" />
      </div>
    </div>
  );
};

export default FundingCommunityPost;
