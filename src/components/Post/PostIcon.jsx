import React from 'react';

import icHeart from '@/img/feedCard/ic-heart-stroke-black.svg';
import icComment from '@/img/feedCard/ic-comment-stroke-black.svg';
import icShare from '@/img/feedCard/ic-share-stroke-black.svg';

const PostIcon = () => {
    return (
        <div className="feed_card_view_funding_icon_div">
            <img src={icHeart} alt="" />
            <img src={icComment} alt="" />
            {/* 공유버튼 누르면 바텀시트 팝업 */}
            <img src={icShare} alt="" />
        </div>
    );
};

export default PostIcon;