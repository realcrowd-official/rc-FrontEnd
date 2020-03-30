const axios = require('axios');

const url = 'http://3.135.237.171:7777/api';
// const url = "http://localhost:7777/api";

const follow = async query => {
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

module.exports = { follow, likePost };
