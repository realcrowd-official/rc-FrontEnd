import React, { useState } from 'react';

import ActionBtn from '../ActionBtn';
import ShareBtn from '../ShareBtn';

import FundingBottomSheet from '../../container/BottomSheet/SelectRewardBottomSheet';

const FundingButton = () => {
    const [bottomSheet, setBottomSheet] = useState(false);
    const toggleBottomSheet = () => {
      bottomSheet ? setBottomSheet(false) : setBottomSheet(true);
    };

    return (
        <div className="fd_btn">
           <div onClick={() => {
               toggleBottomSheet()
           }}>
               <ActionBtn aText="프로젝트 후원하기" />
           </div>
            <ShareBtn />

            <FundingBottomSheet
                visible={bottomSheet}
                onClose={() => toggleBottomSheet()}
            /> 
        </div>
    );
};

export default FundingButton;