const db = require('../db/config');

const accountServices = require('../services/accountServices');

const userControllers = {
  create: async (req, res) => {
    try {
      const payload = await accountServices.Post(req, res);
      return payload;
    } catch (err) {
      console.log(err);
    }
  },
  findAll: async (req, res) => {
    try {
      const payload = await accountServices.findAllAccounts(req, res);
      return payload;
    } catch (err) {
      console.log(err);
    }
  },

  Update: async (req, res) => {
    try {
      const payload = await accountServices.updateAccount(req, res);
      return payload;
    } catch (err) {
      console.log(err);
    }
  },

  deleteAccount: async (req, res) => {
    try {
      const payload = await accountServices.deleteAccount(req, res);
      return payload;
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = userControllers;
