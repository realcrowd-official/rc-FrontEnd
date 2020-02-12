import React from 'react';

import ActionBtn from '../ActionBtn';
import ShareBtn from '../ShareBtn';

const FundingButton = () => {
    return (
        <div className="fd_btn">
           <ActionBtn aText="팔로우" />
            <ShareBtn /> 
        </div>
    );
};

export default FundingButton;