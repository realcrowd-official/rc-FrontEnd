import React, { useContext, useEffect } from 'react';
import HABContext from '../context/headerAndBottom';

const MyPageHome = () => {
    const { state, action } = useContext(HABContext);
    useEffect(()=>{
        action.setHeaderType('regular');
        action.setBottomType('true');
    },[action])
    return (
        <div className="home_body">
            <h2>{state.headerType}</h2>
        </div>
    );
};

export default MyPageHome;