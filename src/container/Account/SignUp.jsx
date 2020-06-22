import React, { useContext, useEffect, useState, useRef } from 'react';
// import axios from 'axios';
import { useLocation, useHistory } from 'react-router-dom';

import resolveJWT from '@/lib/resolveJwt';
import { signUpAxios } from '@/lib/api';

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
  const [nickNameLength, setNickNameLength] = useState(0);
  const [name, setName] = useState(decodedToken.name);
  const [phone, setPhone] = useState('');
  const [idCheck, setIdCheck] = useState(true);
  const [file, setFile] = useState(null);
  const { action } = useContext(HABContext);
  const auth = useContext(AuthContext);

  const imgInputRef = useRef(null);

  useEffect(() => {
    action.setBottomType('false');
    action.setHeaderType('back');
  }, []);

  const changeNickNameValue = (e) => {
    setnickName(e.target.value);
    setNickNameLength(e.target.value.length);
  };

  const postSignUp = (e) => {
    async function axios() {
      const ans = await signUpAxios({
        file: file,
        name: name,
        nickname: nickname,
        phone: phone,
      });
      switch (ans.data.statusCode) {
        case 201:
          history.push(`/signIn?token=${token}`);
          break;
        case 409:
          ans.data.ans === 'nickname' && setIdCheck(false);
        default:
          break;
      }
    }
    axios();
    e.preventDefault();
  };

  const clickImgInput = (e) => {
    imgInputRef.current.click();
  };

  const handleImg = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  return (
    <div className="home_body_nobn">
      <form action="" onSubmit={postSignUp}>
        <div className="su_body">
          <div className="su_img_thumbnail_div">
            <img
              className="su_img_thumbnail"
              src={
                file == null
                  ? 'https://via.placeholder.com/150'
                  : URL.createObjectURL(file)
              }
              alt=""
            />
            <input
              type="file"
              name=""
              id="selectedFile"
              style={{ display: 'none' }}
              ref={imgInputRef}
              onChange={(e) => handleImg(e)}
            />
            <img
              className="su_img_edit"
              src={EditIcon}
              alt=""
              onClick={() => clickImgInput()}
            />
          </div>

          <div className="su_input_div">
            <div>
              <label htmlFor="input">이름</label>
              <input
                type="text"
                name=""
                id=""
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="input">닉네임</label>
              <input
                type="text"
                name=""
                id=""
                defaultValue={nickname}
                onChange={(e) => changeNickNameValue(e)}
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
                onChange={(e) => setPhone(e.target.value)}
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
