const accounts = require('../models/accountsModel');
const Users = require('../models/userModel');
const beneficiaries = require('../models/beneficiariesModel');

const beneficiariesServices = {
  Post: async (req, res) => {
    try {
      const userId = req.Users.id;
      const {
        userAccountId,
        beneficiarieAccountNo,
        beneficiarieName,
        beneficiarieContactNo,
      } = req.body;
      const record = await accounts.findOne({ _id: userAccountId });
      //   console.log(record);
      console.log(record.userId);
      console.log(userId);

      if (record.userId == userId) {
        const data = await beneficiaries.create({
          userId,
          userAccountId,
          beneficiarieAccountNo,
          beneficiarieName,
          beneficiarieContactNo,
        });
        return data;
      } else {
        console.log('error');
      }
    } catch (err) {
      console.log(err);
    }
  },

  find: async (req, res) => {
    try {
      const data = await beneficiaries.find({ userId: req.Users.id });
      return data;
    } catch (err) {
      console.log(err);
    }
  },

  Update: async (req, res) => {
    try {
      const payload = await beneficiaries.findById(req.params.id);
      if (!payload) {
        res.status(404);
        throw new Error('Account Not Found');
      }
      const data = await beneficiaries.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

      res.send(
        //`previous Contact =  ${contact}
        `updatedContact = ${data}`
      );

      return data;
    } catch (err) {
      console.log(err);
    }
  },

  delete: async (req, res) => {
    try {
      let data = await beneficiaries.findByIdAndDelete(req.params.id);
      return data;
    } catch (err) {
      res.status(400);
      throw new Error(err);
    }
  },
};

module.exports = beneficiariesServices;
