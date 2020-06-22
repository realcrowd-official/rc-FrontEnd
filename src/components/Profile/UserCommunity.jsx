import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import FundingProgress from '@/components/FundingProgress';
import UserHeader from '@/components/Post/UserHeader';
import PostSlick from '@/components/Post/PostSlick';
import { cLike } from '@/lib/api';

import {
  IC_HEART_STROKE_BLACK,
  IC_HEART_FILL_PRIMARY,
  IC_COMMENT_STROKE_BLACK,
  IC_SHARE_STROKE_BLACK,
} from '@/global/img/feedCard';

const UserCommunity = (props) => {
  const history = useHistory();
  const [like, setLike] = useState(false);
  const [likeLength, setLikeLength] = useState(0);

  useEffect(() => {
    setLikeLength(props.value.like.length);
    const isin = localStorage.getItem('oid')
      ? props.value.like.findIndex((item) => {
          return item == JSON.parse(localStorage.getItem('oid')).oid;
        })
      : -1;
    isin > -1 && setLike(true);
  }, []);

  const gotoFundingDetail = (pid) => {
    history.push(`/funding/detail/${pid}`);
  };

  const likeHandle = async () => {
    const ans = await cLike(props.value._id);

    if ((ans.data.statusCode = 200)) {
      if (ans.data.ans == 'like') {
        setLike(true);
      } else {
        setLike(false);
      }
      setLikeLength(ans.data.length);
    }
  };

  return (
    <div className="feed_card_view_div">
      <UserHeader maker={props.value.uid} uploadDate={props.value.updateTime} />
      {props.value.files.length == 0 || <PostSlick value={props.value.files} />}
      <div
        className="feed_card_view_funding_div"
        onClick={() => {
          gotoFundingDetail(props.value.pid._id);
        }}
      >
        <img
          className="feed_card_view_funding_img"
          src={props.value.pid.mainImg}
          alt=""
        />
        <div className="feed_card_view_funding_header_text_div">
          <p className="feed_card_view_funding_title">
            {props.value.pid.title}
          </p>
          <p className="feed_card_view_funding_user">
            {props.value.pid.maker.nickName}
          </p>
        </div>
      </div>
      <FundingProgress
        aggregate={props.value.pid.aggregateAmount}
        target={props.value.pid.targetAmount}
        dueDate={props.value.pid.dueDate}
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
            좋아요 {likeLength} ㆍ 댓글 {props.value.comment.length}
          </span>
        </div>
      </div>
      <div className="feed_card_view_funding_icon_div">
        <img
          src={like ? IC_HEART_FILL_PRIMARY : IC_HEART_STROKE_BLACK}
          alt=""
          onClick={() => likeHandle()}
        />
        <img src={IC_COMMENT_STROKE_BLACK} alt="" />
        {/* 공유버튼 누르면 바텀시트 팝업 */}
        <img src={IC_SHARE_STROKE_BLACK} alt="" />
      </div>
    </div>
  );
};

export default UserCommunity;
