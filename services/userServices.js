const Users = require('../models/userModel');
const generateToken = require('../db/generateToken');

const userServices = {
  Post: async (req, res) => {
    try {
      const { name, contact, email, password } = req.body;
      if (await Users.findOne({ email })) {
        res.status(400);
        throw new Error('Email already exists');
      }
      const data = await Users.create({
        name,
        contact,
        email,
        password,
      });

      return data;
    } catch (err) {
      console.log(err);
    }
  },

  userAuthentication: async (req, res) => {
    try {
      const { email, password } = req.body;
      const userExist = await Users.findOne({ email });

      if (userExist && userExist.matchPassword(password)) {
        res.send({
          _id: userExist.id,
          name: userExist.name,
          email: userExist.email,
          // password: userExist.password,
          Token: generateToken(userExist._id),
        });
      }
      if (!userExist) {
        throw new Error('Invalid email or password');
      }
    } catch (err) {
      throw new Error(err);
    }
  },
};

module.exports = userServices;
