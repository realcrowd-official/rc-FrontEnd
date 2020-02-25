import React from 'react';

const UserHeader = props => {
  return (
    <div className="uh_div">
      <div className="uh_header_div">
        <img
          className="uh_thumnail uh_margin"
          src="https://via.placeholder.com/150"
        />
        <div className="uh_header_margin">
          <div className="uh_maker_name">{props.maker.nickName}</div>
          <div className="uh_upload_time">1일 전</div>
        </div>
        <button className="uh_margin uh_button uh_button_text">팔로우</button>
      </div>
    </div>
  );
};

export default UserHeader;
