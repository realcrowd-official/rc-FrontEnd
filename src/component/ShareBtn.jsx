import React from 'react';

import ShareIcon from '../img/ic-share-stroke-black.svg';

const ShareBtn = () => {
    return (
        <div>
            <div className="share_btn_div">
                <img src={ShareIcon} alt=""/>
            </div>
        </div>
    );
};

export default ShareBtn;