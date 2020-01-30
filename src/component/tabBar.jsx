import React, { useContext } from 'react';
import TabContext from '../context/tab';

const TabBar = () => {
    const { state, action } = useContext(TabContext)
    return (
        <div className="tabBar_container">
            <button className={ "punding_doing_btn" + (state.tabMenu === 'doing'?' btn_active':'')} onClick={() => action.setTabMenu('doing')}>진행중인 펀딩</button>
            <button className={ "punding_reservate_btn" + (state.tabMenu === 'reservate'?' btn_active':'')} onClick={() => action.setTabMenu('reservate')}>예정된 펀딩</button>
        </div>        
    );
};

export default TabBar;