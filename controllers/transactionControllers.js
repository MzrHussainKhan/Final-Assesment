const db = require('../db/config');
const transcationServices = require('../services/transcationServices');

const transcationControllers = {
  create: async (req, res) => {
    try {
      const payload = await transcationServices.Post(req, res);
      return payload;
    } catch (err) {
      console.log(err);
    }
  },
};
module.exports = transcationControllers;
