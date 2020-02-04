import React from 'react';

const ActionBtn = props => {
    return (
        <div>
            <div className = "boost_btn_div">
                <button><p>{props.aText}</p></button>
            </div>
        </div>
    );
};

export default ActionBtn;