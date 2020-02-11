import React from 'react';

const FundingDetailTab = () => {
    return (
    <div className="fd_tab_container">
        <div className="fd_tab_wrapper">
            <button
            // className={'funding_doing_btn' + (state.tabMenu === 'doing' ? ' btn_active' : '')}
            className='funding_doing_btn'
            // onClick={() => action.setTabMenu('doing')}
            >
                스토리
            </button>
            <button>
                커뮤니티
            </button>
            <button
            // className={'funding_reservate_btn' + (state.tabMenu === 'reservate' ? ' btn_active' : '')}
            className='funding_reservate_btn'
            // onClick={() => action.setTabMenu('reservate')}
            >
                정보
            </button>
        </div>
    </div>
    );
};

export default FundingDetailTab;