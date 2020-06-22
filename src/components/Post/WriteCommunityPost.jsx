import React, { useState, useRef } from 'react';

import ActionBtn from '@/components/ActionBtn';

import { IC_CAMERA_GREY } from '@/global/img/post';

import { commentSave } from '@/lib/api';
import { getDefaultCompilerOptions } from 'typescript';
// import CameraIcon from '@/img/post/ic-camera-grey.svg';

const WriteCommunityPost = (props) => {
  const [write, setWrite] = useState(false);
  const [imgFile, setImgFile] = useState([]);
  const imgInputRef = useRef(null);
  const clickToWrite = () => {
    setWrite(true);
  };
  const clickImgInput = (e) => {
    imgInputRef.current.click();
  };
  const handleImg = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const tmp = e.target.files[i];
      setImgFile((imgFile) => [...imgFile, tmp]);
    }
  };

  const saveAxios = async () => {
    const ans = await commentSave({
      files: imgFile,
      pid: props.pid,
      content: document.getElementById('wcp_content').value,
    });
    if (ans.data.statusCode == 200) {
      window.location.reload();
    }
  };
  return (
    <div className="wcp_div">
      {write ? (
        <div>
          <div className="wcp_img_div">
            <div className="wcp_img_add_btn">
              <input
                type="file"
                name=""
                id="selectedFile"
                style={{ display: 'none' }}
                ref={imgInputRef}
                onChange={(e) => handleImg(e)}
                multiple
              />
              <div className="wcp_img_add_div" onClick={() => clickImgInput()}>
                <img src={IC_CAMERA_GREY} alt="" />
                <p>{imgFile.length}/5</p>
              </div>
            </div>
            {imgFile.map((Data) => {
              return (
                <img className="wcp_img_thmb" src={URL.createObjectURL(Data)} />
              );
            })}
          </div>
          <hr />
          <div className="wcp_write_div">
            <textarea
              name="wcp_content"
              id="wcp_content"
              cols="30"
              rows="10"
              placeholder="여기서부터 글을 작성해 주세요"
            ></textarea>
          </div>
          <hr />
          <div className="wcp_wrtie_btn" onClick={() => saveAxios()}>
            <ActionBtn aText="게시글 등록하기" />
          </div>
        </div>
      ) : (
        <div onClick={() => clickToWrite()}>
          <ActionBtn aText="소중한 한마디를 전해주세요" />
        </div>
      )}
    </div>
  );
};

export default WriteCommunityPost;
