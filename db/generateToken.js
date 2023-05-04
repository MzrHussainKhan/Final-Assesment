const jwt = require('jsonwebtoken');
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.jwt_Secret, {
    expiresIn: '1d',
  });
};

module.exports = generateToken;
