import React from 'react';

import ActionBtn from '@/components/ActionBtn';

import CameraIcon from '@/img/post/ic-camera-grey.svg'

const WriteCommunityPost = () => {
  return (
    <div className="wcp_div">
      {/* <ActionBtn aText="소중한 한마디를 전해주세요" /> */}
      <div className="wcp_img_div">
        <div className="wcp_img_add_btn">
            <img src={CameraIcon} alt=""/>
            <p>1/5</p>
        </div>
        {/* <input type="image" src="https://via.placeholder.com/150" alt="" /> */}
      </div>
      <hr/>
      <div className="wcp_wrtie_div">
        <input type="text" placeholder="여기서부터 글을 작성해 주세요" name="" id="" />
      </div>
    </div>
  );
};

export default WriteCommunityPost;
