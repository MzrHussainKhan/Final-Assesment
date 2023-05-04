const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

const transactionSchema = new mongoose.Schema(
  {
    senderAccId: {
      type: String,
      //   unique: true,
      required: [true, 'Please provide sender account number'],
    },

    receiverAccId: {
      type: String,
      required: [true, 'Please provide receiver account number'],
    },

    status: {
      type: String,
      default: 1,
    },

    amount: {
      type: String,
      required: [true, 'Please provide amount'],
      //   default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('transactions', transactionSchema);
