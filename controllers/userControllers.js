const db = require('../db/config');

const userServices = require('../services/userServices');

const userControllers = {
  create: async (req, res) => {
    try {
      const payload = await userServices.Post(req, res);
      return payload;
    } catch (err) {
      console.log(err);
    }
  },
  userAuth: async (req, res) => {
    try {
      let auth = await userServices.userAuthentication(req, res);
      return auth;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

module.exports = userControllers;
