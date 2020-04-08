import React, { useContext } from 'react';

import ActionBtn from '@/components/ActionBtn';
import ShareBtn from '@/components/ShareBtn';

import ACContext from '@/context/account';

import { followAxios } from '@/lib/api';

import { numberWithCommas } from '@/global/utils.ts';

const ProfileUserInfo = props => {
  const AC = useContext(ACContext);
  const followClickListner = async () => {
    const ans = await followAxios({
      oid: props.value._id,
      uid: JSON.parse(localStorage.getItem('oid')).oid
    });
    if (ans.data.statusCode == 200) {
      if (ans.data.ans == 'unfollow') {
        AC.action.setIsFollow(false);
      } else {
        AC.action.setIsFollow(true);
      }
      AC.action.setFollower(ans.data.data.length);
    }
  };
  return (
    <div className="pui_body">
      <div className="pui_header">
        <h2>{props.value.nickName}</h2>
        <img
          src={
            props.value.thumNailPic
              ? props.value.thumNailPic
              : 'https://via.placeholder.com/150'
          }
          alt=""
        />
      </div>
      <div className="pui_follow_follwing_div">
        <div>
          <p className="pui_plain_p">팔로워</p>
          <p className="pui_value_p">{numberWithCommas(AC.state.follower)}</p>
        </div>
        <div>
          <p className="pui_plain_p">팔로잉</p>
          <p className="pui_value_p">{numberWithCommas(AC.state.following)}</p>
        </div>
      </div>
      <div className="pui_info_div">
        <p>{props.value.infoMessage}</p>
      </div>
      <div className="pui_btn_div">
        <div onClick={() => followClickListner()}>
          <ActionBtn aText={AC.state.isFollow ? '언팔로우' : '팔로우'} />
        </div>
        <ShareBtn />
      </div>
    </div>
  );
};

export default ProfileUserInfo;
