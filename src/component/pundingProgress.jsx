import React from 'react';

const PundingProgress = () => {
    return (
        <div>
            <div className="punding_progress_bar_div">
                <div className="punding_progress_bar"></div>
            </div>
            <div className="punding_information_div">
                <div className="punding_percentage">34%</div>
                <div className="punding_cost">339,000원</div>
            </div>
        </div>
    );
};

export default PundingProgress;