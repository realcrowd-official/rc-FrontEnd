import React, { useContext, useEffect } from 'react';

import HABContext from '../../context/headerAndBottom';

import EditIcon from '../../img/ic-edit-white.svg';

const SignIn = () => {
    const { action } = useContext(HABContext);
    useEffect(() => {
        action.setBottomType('false');
        action.setHeaderType('back');
    });

    return (
        <div className="home_body_nobn">
            <form action="" method="post">

                <div className="si_body">
                    <div className="si_img_thumbnail_div">
                        <img className="si_img_thumbnail" src="https://via.placeholder.com/150" alt=""/>
                        <img className="si_img_edit" src={EditIcon} alt=""/>
                    </div>

                    <div className="si_input_div">
                            <div>
                                <label htmlFor="input">이름</label>
                                <input type="text" name="" id=""/>
                            </div>
                            <div>
                                <label htmlFor="input">닉네임</label>
                                <input type="text" name="" id=""/>
                                <label>0/20</label>
                            </div>
                            <div>
                                <label htmlFor="">휴대폰 번호</label>
                                <input type="text" name="" id=""/>
                            </div>
                    </div>
                </div>
                <div className="si_submit_div">
                    <button type="submit"><span>가입완료</span></button>
                </div>

            </form>
        </div>
    );
};

export default SignIn;