import React, { useContext, useEffect } from 'react';

import HABContext from '../../context/headerAndBottom';

const SignIn = () => {
    const { action } = useContext(HABContext);
    useEffect(() => {
        action.setBottomType('false');
        action.setHeaderType('back');
    });

    return (
        <div>
            
        </div>
    );
};

export default SignIn;