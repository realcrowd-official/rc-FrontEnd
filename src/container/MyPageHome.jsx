import React, { useContext, useEffect } from 'react';
import HeaderContext from '../context/header';

const MyPageHome = () => {
    const { state, action } = useContext(HeaderContext);
    useEffect(()=>{
        action.setHeaderType('back')
    },[])
    return (
        <div className="home_body">
            <h2>{state.headerType}</h2>
        </div>
    );
};

export default MyPageHome;