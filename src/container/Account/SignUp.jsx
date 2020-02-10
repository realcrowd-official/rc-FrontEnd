import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import resolveJWT from '../../lib/resolveJwt';

import HABContext from '../../context/headerAndBottom';

import EditIcon from '../../img/ic-edit-white.svg';

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

const SignUp = () => {
    const token = useQuery().get('token');
    const decodedToken = resolveJWT(token);

    decodedToken==="jwt expired" && window.location.replace('/');

    
    const [nickname, setnickName] = useState(decodedToken.nickname);
    const [nickNameLength, setNickNameLength] = useState(nickname.length);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const { action } = useContext(HABContext);
    
    useEffect(() => {
        action.setBottomType('false');
        action.setHeaderType('back');
    });

    const changeNickNameValue = (e) => {
        setnickName(e.target.value);
        setNickNameLength(e.target.value.length);
    }

    const postSignUp = (e) => {
        console.log(`name is ${name} nickname is ${nickname} phone is ${phone} token is ${token}`)
        const signUpUri = "http://localhost:7777/api/account/signUp";
        axios.post(signUpUri, {
            name: name,
            nickname: nickname,
            phone: phone,
            token: token
        }).then((res) => {console.log(res.status)})
        e.preventDefault()
    }

    return (
        <div className="home_body_nobn">
            <form action="" onSubmit={postSignUp}>

                <div className="si_body">
                    <div className="si_img_thumbnail_div">
                        <img className="si_img_thumbnail" src="https://via.placeholder.com/150" alt=""/>
                        <img className="si_img_edit" src={EditIcon} alt=""/>
                    </div>

                    <div className="si_input_div">
                            <div>
                                <label htmlFor="input">이름</label>
                                <input type="text" name="" id="" defaultValue={name} onChange={(e)=>setName(e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor="input">닉네임</label>
                                <input type="text" name="" id="" defaultValue={nickname} onChange={(e)=>changeNickNameValue(e)} maxLength="20"/>
                                <label>{nickNameLength}/20</label>
                            </div>
                            <div>
                                <label htmlFor="input">휴대폰 번호</label>
                                <input type="text" name="" id="" placeholder="    숫자만 입력해주세요" maxLength="11" defaultValue={phone} onChange={(e)=>setPhone(e.target.value)}/>
                                <label htmlFor="input">후원 및 리워드 배송 시, 연락을 위해 필요합니다.</label>
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

export default SignUp;