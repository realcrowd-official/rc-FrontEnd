import React, { useState, useEffect, useContext } from 'react';
import Slick from 'react-slick';
import Axios from 'axios';

//components
import FundingProgress from '@/components/FundingProgress';
import UserHeader from '@/components/Post/UserHeader';
import PostSlick from '@/components/Post/PostSlick';

import BSContext from '@/context/bottomSheet';

import {
  IC_HEART_STROKE_BLACK,
  IC_HEART_FILL_PRIMARY,
  IC_COMMENT_STROKE_BLACK,
  IC_SHARE_STROKE_BLACK
} from '@/global/img/feedCard';

const FeedCardView = props => {
  const [like, setLike] = useState(false);
  const [likeLength, setLikeLength] = useState(0);
  const BS = useContext(BSContext);

  useEffect(() => {
    setLikeLength(props.value.likeMember.length);
    const isin = localStorage.getItem('oid')
      ? props.value.likeMember.findIndex(item => {
          return item == JSON.parse(localStorage.getItem('oid')).oid;
        })
      : -1;
    isin > -1 && setLike(true);
  }, []);

  const carouselSetting = {
    dots: false,
    infinite: false,
    speed: 500,
    slideToShow: 1,
    slidesToScroll: 1
  };
  const likeHandle = () => {
    // const url = 'http://localhost:7777/api/feed/like';
    const url = 'http://3.135.237.171:7777/api/feed/like';
    Axios.put(
      url,
      {
        id: props.value._id
      },
      {
        headers: {
          'x-access-token': JSON.parse(localStorage.getItem('token')).token
        }
      }
    ).then(res => {
      if ((res.data.statusCode = 200)) {
        if (res.data.ans == 'like') {
          setLike(true);
        } else {
          setLike(false);
        }
        setLikeLength(res.data.length);
      }
    });
  };

  const toLogin = toPath => {
    BS.action.setBottomSheet(true);
    localStorage.setItem(
      'historyPath',
      JSON.stringify({
        path: toPath
      })
    );
  };

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
            좋아요 {likeLength} ㆍ 댓글 {props.value.comment.length}
          </span>
        </div>
      </div>
      <div className="feed_card_view_funding_icon_div">
        <img
          src={like ? IC_HEART_FILL_PRIMARY : IC_HEART_STROKE_BLACK}
          alt=""
          onClick={() =>
            localStorage.getItem('token') ? likeHandle() : toLogin('/')
          }
        />
        <img src={IC_COMMENT_STROKE_BLACK} alt="" />
        {/* 공유버튼 누르면 바텀시트 팝업 */}
        <img src={IC_SHARE_STROKE_BLACK} alt="" />
      </div>
    </div>
  );
};

export default FeedCardView;
