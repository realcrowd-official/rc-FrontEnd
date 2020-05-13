const axios = require('axios');

// const url = 'http://api.mircrowd.com/api';
const url = 'http://dev.api.mircrowd.com/api';
// const url = 'http://localhost:7777/api';

const token = localStorage.getItem('token')
  ? JSON.parse(localStorage.getItem('token')).token
  : '';

//project

export const pHAxios = async () => {
  const axiosUrl = `${url}/project/crud`;
  return await axios.get(axiosUrl).then((res) => res);
};

export const fDAxios = async (query) => {
  const axiosUrl = `${url}/project/crud/${query.pid}`;
  return await axios.get(axiosUrl).then((res) => res);
};

//account
export const loginAxios = async (query) => {
  const axiosUrl = `${url}/account/socialLogin/${query.kind}/login`;
  return await axios.get(axiosUrl).then((res) => res);
};

export const signInAxios = async (query) => {
  const axiosUrl = `${url}/account/signIn`;
  return await axios
    .post(axiosUrl, {
      id: query.id,
    })
    .then((res) => res);
};

export const signUpAxios = async (query) => {
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
        'x-access-token': token,
      },
    })
    .then((res) => res);
};

export const followAxios = async (query) => {
  const axiosUrl = `${url}/account/follow`;
  return await axios
    .put(
      axiosUrl,
      {
        oid: query.oid,
        uid: query.uid,
      },
      {
        headers: {
          'x-access-token': token,
        },
      }
    )
    .then((res) => res);
};

export const mPHAxios = async (query) => {
  const axiosUrl = `${url}/account/profile`;
  return await axios
    .get(axiosUrl, {
      headers: {
        'x-access-token': token,
      },
    })
    .then((res) => res);
};
//feed

export const fHAxios = async (query) => {
  const axiosUrl = `${url}/feed/crud`;
  return await axios.get(axiosUrl).then((res) => res);
};

export const likePost = async (query) => {
  const axiosUrl = `${url}/feed/like`;
  return await axios
    .put(
      axiosUrl,
      {
        id: query.id,
      },
      {
        headers: {
          'x-access-token': token,
        },
      }
    )
    .then((res) => res);
};

export const checkItem = async (query) => {
  const axiosUrl = `${url}/purchase/check`;
  return await axios
    .post(
      axiosUrl,
      {
        pId: query.pId,
        iId: query.iId,
      },
      {
        headers: {
          'x-access-token': token,
        },
      }
    )
    .then((res) => res);
};

// exports = {
//   pHAxios,
//   // fDAxios,
//   loginAxios,
//   signInAxios,
//   signUpAxios,
//   followAxios,
//   mPHAxios,
//   fHAxios,
//   likePost,
// };
