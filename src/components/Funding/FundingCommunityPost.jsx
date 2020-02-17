import React from 'react';

import UserHeader from '@/components/Post/UserHeader';
import PostSlick from '@/components/Post/PostSlick';
import PostLCP from '@/components/Post/PostLikeCommentP';
import PostIcon from '@/components/Post/PostIcon';



const FundingCommunityPost = () => {
    return (
        <div className="fcp_div">
            <UserHeader/>
            <PostSlick/>
            <div className="fcp_explain_div">
                <p>피드 카드의 본문 내용은 최대 3줄까지 숨김 없이 보여지며, 3줄이 넘어가게 될 경우에는 다음 예시와 같이 ellipsis 더 보기 처리가 됩니다 ...3줄이 넘어가게 될 경우에는 다음 예시와 같이 ellipsis 더 보기 처리가 됩니다 ...3줄이 넘어가게 될 경우에는 다음 예시와 같이 ellipsis 더 보기 처리가 됩니다 ... {/*<a>더 보기</a>*/}</p>
            </div>
            {/* 더보기는 추후 구현 */}
            <PostLCP/>
            <PostIcon/>
        </div>
    );
};

export default FundingCommunityPost;