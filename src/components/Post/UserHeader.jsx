import React, { useState, useEffect } from 'react';
import { leftDay } from '@/lib/date';
import { followAxios } from '@/lib/api';

const UserHeader = props => {
  const [follow, setFollow] = useState(false);
  useEffect(() => {
    const isin = localStorage.getItem('oid')
      ? props.maker.followerList.findIndex(item => {
          return item == JSON.parse(localStorage.getItem('oid')).oid;
        })
      : -1;
    isin > -1 && setFollow(true);
  }, []);
  const followClickListner = async () => {
    const ans = await followAxios({
      oid: props.maker._id,
      uid: JSON.parse(localStorage.getItem('oid')).oid
    });
    if (ans.data.statusCode == 200) {
      console.log(ans.data.ans);
      if (ans.data.ans == 'unfollow') {
        setFollow(false);
        console.log(follow);
      } else {
        setFollow(true);
      }
    }
  };
  return (
    <div className="uh_div">
      <div className="uh_header_div">
        <img
          className="uh_thumnail uh_margin"
          src={
            props.maker.thumNailPic
              ? props.maker.thumNailPic
              : 'https://via.placeholder.com/150'
          }
        />
        <div className="uh_header_margin">
          <div className="uh_maker_name">{props.maker.nickName}</div>
          <div className="uh_upload_time">{leftDay(props.uploadDate)} 전</div>
        </div>
        <button
          className="uh_margin uh_button uh_button_text"
          onClick={() => followClickListner()}
        >
          {follow ? '언팔로우' : '팔로우'}
        </button>
      </div>
    </div>
  );
};

export default UserHeader;
