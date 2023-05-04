const mongoose = require('mongoose');

const beneficiariesSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      //   unique: true,
      required: [true, 'Please provide your name'],
    },
    userAccountId: {
      type: String,
      //   unique: true,
      required: [true, 'Please provide your name'],
    },
    // SenderAccountNo: {
    //   type: String,
    //   required: [true, 'Please provide your account number'],
    // },

    beneficiarieAccountNo: {
      type: String,
      required: [true, 'Please provide your account number'],
    },
    beneficiarieName: {
      type: String,
      required: [true, 'Please provide receivers name'],
    },
    beneficiarieContactNo: {
      type: String,
      required: [true, 'Please provide receivers name'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('beneficiaries', beneficiariesSchema);
