import React from 'react';

const ActionBtn = props => {
  return (
    <div className="ActionBtn">
      <div className="boost_btn_div">
        <button className={props.btnClass}>
          <p>{props.aText}</p>
        </button>
      </div>
    </div>
  );
};

export default ActionBtn;
