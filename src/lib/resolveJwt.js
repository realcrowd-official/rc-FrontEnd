const jwt = require('jsonwebtoken');

// eslint-disable-next-line consistent-return
const authMiddleware = token => {
  // token does not exist
  if (!token) {
    return false;
  }

  // create a promise that decodes the token
  return jwt.verify(token, 'ReAlCrOwD', (err, decoded) => {
    if (err) return err.message;
    return decoded;
  });
};

module.exports = authMiddleware;
