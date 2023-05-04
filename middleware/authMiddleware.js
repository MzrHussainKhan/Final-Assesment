const jwt = require('jsonwebtoken');
const Users = require('../models/userModel');

const protected = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.jwt_Secret);
      req.Users = await Users.findById(decoded.id).select('-password');
      const usersid = decoded.id;
      //   console.log(usersid);
      next();
    } catch (err) {
      res.send('Un Authorize User');
      //   console.log(err);
    }
  }
};

module.exports = { protected };
