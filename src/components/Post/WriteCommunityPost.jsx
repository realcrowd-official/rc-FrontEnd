import React from 'react';

import ActionBtn from '@/components/ActionBtn';

import { IC_CAMERA_GREY } from '@/global/img/post';

// import CameraIcon from '@/img/post/ic-camera-grey.svg';

const WriteCommunityPost = () => {
  return (
    <div className="wcp_div">
      {/* <ActionBtn aText="소중한 한마디를 전해주세요" /> */}
      <form action="" method="post">
        <div className="wcp_img_div">
          <div className="wcp_img_add_btn">
            <img src={IC_CAMERA_GREY} alt="" />
            <p>1/5</p>
          </div>
          {/* <input type="image" src="https://via.placeholder.com/150" alt="" /> */}
        </div>
        <hr />
        <div className="wcp_write_div">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="여기서부터 글을 작성해 주세요"
          ></textarea>
        </div>
        <hr />
        <div className="wcp_wrtie_btn">
          <ActionBtn aText="게시글 등록하기" />
        </div>
      </form>
    </div>
  );
};

export default WriteCommunityPost;
