import React, { useContext, useEffect, useState, useRef } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import { editProfileAxios, mPHAxios } from '@/lib/api';

import HABContext from '@/context/headerAndBottom';
import ACContext from '@/context/account';

import EditIcon from '@/img/ic-edit-white.svg';

const EditProfile = () => {
  const history = useHistory();
  const ACCONTEXT = useContext(ACContext);
  const { action } = useContext(HABContext);
  const [nickname, setnickName] = useState('');
  const [nickNameLength, setNickNameLength] = useState(0);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [infoMessage, setInfoMessage] = useState('');
  const [infoMessageLength, setInfoMessageLength] = useState(0);
  const [idCheck, setIdCheck] = useState(true);
  const [file, setFile] = useState(null);

  const imgInputRef = useRef(null);

  useEffect(() => {
    action.setBottomType('false');
    action.setHeaderType('back');
  }, []);

  useEffect(() => {
    if (ACCONTEXT.state.info.length === 0) {
      async function axios() {
        const ans = await mPHAxios({
          token: JSON.parse(localStorage.getItem('token')).token,
        });
        if (ans.data.statusCode == 200) {
          await ACCONTEXT.action.setInfo(ans.data.profileInfo);
          setnickName(ans.data.profileInfo.nickName);
          setNickNameLength(ans.data.profileInfo.nickName.length);
          setName(ans.data.profileInfo.name);
          setPhone(ans.data.profileInfo.tel);
          setEmail(ans.data.profileInfo.email);
          setInfoMessage(ans.data.profileInfo.infoMessage);
          setInfoMessageLength(ans.data.profileInfo.infoMessage.length);
        } else {
          localStorage.removeItem('token');
        }
      }
      axios();
    } else {
      setnickName(ACCONTEXT.state.info.nickName);
      setNickNameLength(ACCONTEXT.state.info.nickName.length);
      setName(ACCONTEXT.state.info.name);
      setPhone(ACCONTEXT.state.info.tel);
      setEmail(ACCONTEXT.state.info.email);
      setInfoMessage(ACCONTEXT.state.info.infoMessage);
      setInfoMessageLength(ACCONTEXT.state.info.infoMessage.length);
    }
  }, []);

  const changeNickNameValue = (e) => {
    setnickName(e.target.value);
    setNickNameLength(e.target.value.length);
  };

  const changeInfoMessageValue = (e) => {
    setInfoMessage(e.target.value);
    setInfoMessageLength(e.target.value.length);
  };

  const clickImgInput = (e) => {
    imgInputRef.current.click();
  };

  const handleImg = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const putEdit = (e) => {
    async function axios() {
      const ans = await editProfileAxios({
        file: file ? file : null,
        name: name,
        nickname: nickname,
        phone: phone,
        infoMessage: infoMessage,
        email: email,
      });
      // switch (ans.data.statusCode) {
      //   case 201:
      //     history.push(`/signIn?token=${token}`);
      //     break;
      //   case 409:
      //     ans.data.ans === 'nickname' && setIdCheck(false);
      //   default:
      //     break;
      // }
    }
    axios();
    // e.preventDefault();
  };
  return (
    <div className="home_body_nobn ep_mb">
      <div className="su_body">
        <div className="su_img_thumbnail_div">
          <img
            className="su_img_thumbnail"
            src={
              file == null
                ? 'https://via.placeholder.com/150'
                : history.location.state.thumNailPic
                ? history.location.state.thumNailPic
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
          <div>
            <label htmlFor="input">이메일 주소</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="이메일을 입력해주세요"
              maxLength="12"
              defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="input">내 소개</label>
            <textarea
              name=""
              id=""
              placeholder="간단한 한 마디로 나를 소개해주세요!"
              defaultValue={infoMessage}
              onChange={(e) => changeInfoMessageValue(e)}
              cols="2"
              rows="5"
              maxLength="20"
            ></textarea>
            <label>{infoMessageLength}/20</label>
          </div>
        </div>
      </div>
      <div
        className="su_submit_div"
        onClick={() => {
          putEdit();
        }}
      >
        <button type="submit">프로필 저장하기</button>
      </div>
    </div>
  );
};

export default EditProfile;
