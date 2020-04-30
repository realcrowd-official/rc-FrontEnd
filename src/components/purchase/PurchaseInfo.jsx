import React from 'react';

const PurchaseInfo = () => {
  return (
    <div className="pi_info section">
      <p className="pi_info_title">후원 상세 내역</p>
      <div className="pi_info_header">
        <img src="https://via.placeholder.com/150" alt="" />
        <div>
          <p className="title">
            이미지 고정, 텍스트 가변, 최대 2줄 이후 ellipsis
          </p>
          <p className="content">
            이미지 고정, 텍스트 가변, 최대 2줄 이후 ellipsis
          </p>
        </div>
      </div>
      <div className="pi_info_cost">
        <div>
          <p className="info">후원액</p> <p className="cost">ddd원</p>
        </div>
        <div>
          <p className="info">배송비</p> <p className="cost">ddd원</p>
        </div>
      </div>
    </div>
  );
};

export default PurchaseInfo;
