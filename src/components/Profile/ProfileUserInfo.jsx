import React from 'react';
import ActionBtn from '../ActionBtn';
import ShareBtn from '../ShareBtn';

const ProfileUserInfo = () => {
  return (
    <div className="pui_body">
      <div className="pui_header">
        <h2>메이커닉네임</h2>
        <img src="https://via.placeholder.com/150" alt="" />
      </div>
      <div className="pui_follow_follwing_div">
        <div>
          <p className="pui_plain_p">팔로워</p>
          <p className="pui_value_p">1,408</p>
        </div>
        <div>
          <p className="pui_plain_p">팔로잉</p>
          <p className="pui_value_p">226</p>
        </div>
      </div>
      <div className="pui_info_div">
        <p>
          메이커의 한 줄 소개는 최대 2줄까지 보여지며, 이후로는 ellipsis 처리됩니다 (60자
          제한).메이커의 한 줄 소개는 최대 2줄까지 보여지며, 이후로는 ellipsis 처리됩니다 (60자
          제한).
        </p>
      </div>
      <div className="pui_btn_div">
        <ActionBtn aText="팔로우" />
        <ShareBtn />
      </div>
    </div>
  );
};

export default ProfileUserInfo;
