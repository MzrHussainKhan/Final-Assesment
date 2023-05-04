const mongoose = require('mongoose');

const receiptsSchema = new mongoose.Schema(
  {
    senderAccNo: {
      type: String,
      //   unique: true,
      required: [true, 'Please provide sender account number'],
    },
    receiverAccNo: {
      type: String,
      //   unique: true,
      required: [true, 'Please provide receiver account number'],
    },

    amount: {
      type: String,
      required: [true, 'Please provide amount'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('receipts', receiptsSchema);
