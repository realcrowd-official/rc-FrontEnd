const axios = require('axios');

const url = "http://3.135.237.171:7777/api/account/checkJWT";
// const url = "http://localhost:7777/api/account/checkJWT"

const isLogin = () => {
  if (localStorage.getItem('token') == null) {
    return false;
  } else {
    axios
      .get(url, {
        headers: { 'x-access-token': JSON.parse(localStorage.getItem('token')).token }
      })
      .then(res => {
        switch (res.data.statusCode) {
          case 201:
            localStorage.setItem(
              'token',
              JSON.stringify({
                token: res.data.ans
              })
            );
            return true;
          case 200:
            return true;
          case 403:
            localStorage.removeItem('token');
            return false;
          default:
            return false;
        }
      });
  }

  return localStorage.getItem('token') == null ? false : true;
};

module.exports = { isLogin };
