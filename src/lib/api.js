const axios = require('axios');

// const url = 'http://api.mircrowd.com/api';
const url = 'http://dev.api.mircrowd.com/api';
// const url = 'http://localhost:7777/api';

const token = localStorage.getItem('token')
  ? JSON.parse(localStorage.getItem('token')).token
  : '';

///////////
//project//
///////////
export const pHAxios = async () => {
  const axiosUrl = `${url}/project/crud`;
  return await axios.get(axiosUrl).then((res) => res);
};

export const fDAxios = async (query) => {
  const axiosUrl = `${url}/project/crud/${query.pid}`;
  return await axios.get(axiosUrl).then((res) => res);
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

export const purchaseInfoAxios = async ({ pid, iId }) => {
  const axiosUrl = `${url}/purchase/deal?pid=${pid}&iId=${iId}`;
  return await axios
    .get(axiosUrl, {
      headers: {
        'x-access-token': token,
      },
    })
    .then((res) => res);
};

export const cLike = async (cid) => {
  console.log(cid);
  const axiosUrl = `${url}/project/comment/like`;
  return await axios
    .put(
      axiosUrl,
      {
        cid: cid,
      },
      {
        headers: {
          'x-access-token': token,
        },
      }
    )
    .then((res) => res);
};

export const commentSave = async ({ files, content, pid }) => {
  const axiosUrl = `${url}/project/comment`;
  const formData = new FormData();
  formData.append('content', content);
  formData.append('pid', pid);
  await files.map((Data) => {
    formData.append('img', Data);
  });

  return await axios
    .post(axiosUrl, formData, { headers: { 'x-access-token': token } })
    .then((res) => res);
};

export const getCommentPid = async ({ pid, start }) => {
  const axiosUrl = `${url}/project/comment?pid=${pid}&start=${start}`;
  return await axios.get(axiosUrl).then((res) => res);
};

///////////
//account//
///////////
export const loginAxios = async (query) => {
  const axiosUrl = `${url}/account/socialLogin/${query.kind}/login`;
  console.log(query.kind);
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
  console.log(query);
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

export const getAddr = async () => {
  const axiosUrl = `${url}/account/address`;
  return await axios
    .get(axiosUrl, { headers: { 'x-access-token': token } })
    .then((res) => res);
};

export const saveAddr = async ({ addrName, addr, primary }) => {
  const axiosUrl = `${url}/account/address`;
  return await axios
    .post(
      axiosUrl,
      {
        addrName: addrName,
        addr: addr,
        primary: primary,
      },
      {
        headers: {
          'x-access-token': token,
        },
      }
    )
    .then((res) => res);
};

export const mPFAxios = async (query) => {
  const axiosUrl = `${url}/project/crud/user?start=${query.start}`;
  return await axios
    .get(axiosUrl, { headers: { 'x-access-token': token } })
    .then((res) => res);
};

export const mPCAxios = async (start) => {
  const axiosUrl = `${url}/project/comment/user?start=${start}`;
  return await axios
    .get(axiosUrl, { headers: { 'x-access-token': token } })
    .then((res) => res);
};

export const editProfileAxios = async (query) => {
  const axiosUrl = `${url}/account/profile`;
  const formData = new FormData();

  formData.append('name', query.name);
  formData.append('nickName', query.nickname);
  formData.append('phone', query.phone);
  formData.append('infoMessage', query.infoMessage);
  formData.append('email', query.email);
  // !!query.file && formData.append('img', query.file);
  console.log(query);
  return await axios
    .put(axiosUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'x-access-token': token,
      },
    })
    .then((res) => res);
};

////////
//feed//
////////
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
