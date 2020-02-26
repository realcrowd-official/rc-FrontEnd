import React from 'react';

import ActionBtn from '@/components/ActionBtn';
import ShareBtn from '@/components/ShareBtn';

import { numberWithCommas } from '@/global/utils.ts';

const ProfileUserInfo = props => {
  console.log(props.value);
  return (
    <div className="pui_body">
      <div className="pui_header">
        <h2>{props.value.nickName}</h2>
        <img src="https://via.placeholder.com/150" alt="" />
      </div>
      <div className="pui_follow_follwing_div">
        <div>
          <p className="pui_plain_p">팔로워</p>
          <p className="pui_value_p">
            {numberWithCommas(props.value.followerList.length)}
          </p>
        </div>
        <div>
          <p className="pui_plain_p">팔로잉</p>
          <p className="pui_value_p">
            {numberWithCommas(props.value.followingList.length)}
          </p>
        </div>
      </div>
      <div className="pui_info_div">
        <p>{props.value.infoMessage}</p>
      </div>
      <div className="pui_btn_div">
        <ActionBtn aText="팔로우" />
        <ShareBtn />
      </div>
    </div>
  );
};

export default ProfileUserInfo;
