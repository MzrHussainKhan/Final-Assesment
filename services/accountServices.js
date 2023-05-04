const accounts = require('../models/accountsModel');
const Users = require('../models/userModel');

const accountServices = {
  Post: async (req, res) => {
    const userId = req.Users.id;
    const { accountNo, balance } = req.body;

    if (await accounts.findOne({ accountNo })) {
      res.status(400);
      throw new Error('account number already exists');
    }

    const data = await accounts.create({
      userId,
      accountNo,
      balance,
    });
    return data;
  },

  findAllAccounts: async (req, res) => {
    try {
      const data = await accounts.find({
        userId: req.Users.id,
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  },

  updateAccount: async (req, res) => {
    try {
      const payload = await accounts.findById(req.params.id);
      if (!payload) {
        res.status(404);
        throw new Error('Account Not Found');
      }
      const data = await accounts.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });

      res.send(
        //`previous Contact =  ${contact}
        `updatedContact = ${data}`
      );

      return data;
    } catch (err) {
      console.log(err);
    }
  },

  deleteAccount: async (req, res) => {
    try {
      let data = await accounts.findByIdAndDelete(req.params.id);
      return data;
    } catch (err) {
      res.status(400);
      throw new Error(err);
    }
  },
};

module.exports = accountServices;
