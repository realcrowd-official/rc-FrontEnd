import React,{ useEffect, useContext } from 'react';
import HABContext from '../context/headerAndBottom';

const FundingDetail = () => {
    const { state, action } = useContext(HABContext);
    useEffect(() => {
        action.setBottomType('false');
        action.setHeaderType('back');
    })
    return (
        <div>
            
        </div>
    );
};

export default FundingDetail;