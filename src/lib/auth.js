const axios = require('axios');

const isLogin = () => {
  return localStorage.getItem('token')==null ? false : true;
};

module.exports = { isLogin };
