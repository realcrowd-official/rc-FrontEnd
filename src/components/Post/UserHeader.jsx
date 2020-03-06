import React from 'react';
import { leftDay } from '@/lib/date';

const UserHeader = props => {
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
        <button className="uh_margin uh_button uh_button_text">팔로우</button>
      </div>
    </div>
  );
};

export default UserHeader;
