const db = require('../db/config');

const beneficiariesServices = require('../services/beneficiariesServices');

const beneficiariesController = {
  create: async (req, res) => {
    try {
      const payload = await beneficiariesServices.Post(req, res);
      return payload;
    } catch (err) {
      console.log(err);
    }
  },
  find: async (req, res) => {
    try {
      const payload = await beneficiariesServices.find(req, res);
      return payload;
    } catch (err) {
      console.log(err);
    }
  },
  Update: async (req, res) => {
    try {
      const payload = await beneficiariesServices.Update(req, res);
      return payload;
    } catch (err) {
      console.log(err);
    }
  },
  delete: async (req, res) => {
    try {
      const payload = await beneficiariesServices.delete(req, res);
      return payload;
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = beneficiariesController;
