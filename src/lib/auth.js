const axios = require('axios');

const isLogin = () => {
  if (localStorage.getItem('token') == null) {
    return false;
  } else {
    console.log(localStorage.getItem('token'))
    axios
      .get('http://localhost:7777/api/account/checkJWT', {
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
