import React from 'react';

const AddressOption = () => {
  return (
    <div>
      <section className="so_section section">
        <div className="so_header">
          <p className="so_name">홍길동</p>
          <p className="so_origin">기본</p>
        </div>
        <div className="so_main">
          <p className="so_address">
            [21976] 인천광역시 원인재로 56 ,106동 103호
          </p>
        </div>
        <div className="so_btn">
          <button className="so_edit">수정</button>
          <button className="so_select">선택</button>
        </div>
      </section>
    </div>
  );
};

export default AddressOption;
