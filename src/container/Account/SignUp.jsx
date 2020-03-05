import React, { useContext, useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useLocation, useHistory } from 'react-router-dom';

import resolveJWT from '@/lib/resolveJwt';

import HABContext from '@/context/headerAndBottom';
import AuthContext from '@/context/auth';

import EditIcon from '@/img/ic-edit-white.svg';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SignUp = () => {
  const token = useQuery().get('token');
  const decodedToken = resolveJWT(token);
  const history = useHistory();

  decodedToken === 'jwt expired' && window.location.replace('/');

  const [nickname, setnickName] = useState(decodedToken.nickname);
  const [nickNameLength, setNickNameLength] = useState(0 /*nickname.length*/);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [mount, setMount] = useState(false);
  const [idCheck, setIdCheck] = useState(true);
  const { action } = useContext(HABContext);
  const auth = useContext(AuthContext);

  const imgInputRef = useRef(null);

  useEffect(() => {
    action.setBottomType('false');
    action.setHeaderType('back');
  });

  useEffect(() => {
    mount || setMount(true);
  }, []);

  const changeNickNameValue = e => {
    setnickName(e.target.value);
    setNickNameLength(e.target.value.length);
  };

  const postSignUp = e => {
    const signUpUri = 'http://localhost:7777/api/account/signUp';
    // const signUpUri = 'http://3.135.237.171:7777/api/account/signUp';
    axios
      .post(signUpUri, {
        name: name,
        nickname: nickname,
        phone: phone,
        token: token
      })
      .then(res => {
        switch (res.data.statusCode) {
          case 201:
            history.push(`/signIn?token=${token}`);
            break;
          case 409:
            res.data.ans === 'nickname' && setIdCheck(false);
          default:
            break;
        }
      });
    e.preventDefault();
  };

  const clickImgInput = e => {
    imgInputRef.current.click();
  };

  return (
    <div className="home_body_nobn">
      <form action="" onSubmit={postSignUp}>
        <div className="su_body">
          <div className="su_img_thumbnail_div">
            <img
              className="su_img_thumbnail"
              src="https://via.placeholder.com/150"
              alt=""
            />
            <input
              type="file"
              name=""
              id="selectedFile"
              style={{ display: 'none' }}
              ref={imgInputRef}
            />
            {mount ? (
              <img
                className="su_img_edit"
                src={EditIcon}
                alt=""
                onClick={() => clickImgInput()}
              />
            ) : null}
          </div>

          <div className="su_input_div">
            <div>
              <label htmlFor="input">이름</label>
              <input
                type="text"
                name=""
                id=""
                defaultValue={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="input">닉네임</label>
              <input
                type="text"
                name=""
                id=""
                defaultValue={nickname}
                onChange={e => changeNickNameValue(e)}
                maxLength="20"
              />
              {idCheck ? (
                <label>{nickNameLength}/20</label>
              ) : (
                <label>이미 사용중인 닉네임 입니다.</label>
              )}
            </div>
            <div>
              <label htmlFor="input">휴대폰 번호</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="숫자만 입력해주세요"
                maxLength="12"
                defaultValue={phone}
                onChange={e => setPhone(e.target.value)}
              />
              <label>후원 및 리워드 배송 시, 연락을 위해 필요합니다.</label>
            </div>
          </div>
        </div>
        <div className="su_submit_div">
          <button type="submit">가입완료</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
