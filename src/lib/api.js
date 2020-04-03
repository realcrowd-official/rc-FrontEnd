const axios = require('axios');

const url = 'http://3.135.237.171:7777/api';
// const url = "http://localhost:7777/api";

//project

const pHAxios = async () => {
  const axiosUrl = `${url}/project/crud`;
  return await axios.get(axiosUrl).then(res => res);
};

const fDAxios = async query => {
  const axiosUrl = `${url}/project/crud/${query.pid}`;
  return await axios.get(axiosUrl).then(res => res);
};

//account
const loginAxios = async query => {
  const axiosUrl = `${url}/account/socialLogin/${query.kind}/login`;
  return await axios.get(axiosUrl).then(res => res);
};

const signInAxios = async query => {
  const axiosUrl = `${url}/account/signIn`;
  return await axios
    .post(axiosUrl, {
      id: query.id
    })
    .then(res => res);
};

const signUpAxios = async query => {
  const axiosUrl = `${url}/account/signUp`;
  const formData = new FormData();
  formData.append('img', query.file);
  formData.append('name', query.name);
  formData.append('nickname', query.nickname);
  formData.append('phone', query.phone);
  return await axios
    .post(axiosUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'x-access-token': query.token
      }
    })
    .then(res => res);
};

const followAxios = async query => {
  const axiosUrl = `${url}/account/follow`;
  return await axios
    .put(
      axiosUrl,
      {
        oid: query.oid,
        uid: query.uid
      },
      {
        headers: {
          'x-access-token': query.token
        }
      }
    )
    .then(res => res);
};

const mPHAxios = async query => {
  const axiosUrl = `${url}/account/profile`;
  return await axios
    .get(axiosUrl, {
      headers: {
        'x-access-token': query.token
      }
    })
    .then(res => res);
};
//feed

const fHAxios = async query => {
  const axiosUrl = `${url}/feed/crud`;
  return await axios.get(axiosUrl).then(res => res);
};

const likePost = async query => {
  const axiosUrl = `${url}/feed/like`;
  return await axios
    .put(
      axiosUrl,
      {
        id: query.id
      },
      {
        headers: {
          'x-access-token': query.token
        }
      }
    )
    .then(res => res);
};

module.exports = {
  pHAxios,
  fDAxios,
  loginAxios,
  signInAxios,
  signUpAxios,
  followAxios,
  mPHAxios,
  fHAxios,
  likePost
};
