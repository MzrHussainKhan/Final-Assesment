const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

const accountSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      //   unique: true,
      required: [true, 'Please provide your name'],
    },

    accountNo: {
      type: String,
      required: [true, 'Please provide your account number'],
    },

    balance: {
      type: String,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('accounts', accountSchema);
