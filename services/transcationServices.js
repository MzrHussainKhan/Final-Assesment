const transactions = require('../models/transcationModel');
const beneficiaries = require('../models/beneficiariesModel');
const accounts = require('../models/accountsModel');
const receipts = require('../models/receiptModel');

const transactionServices = {
  Post: async (req, res) => {
    const userId = req.Users.id;
    const { receiverAccId, amount } = req.body;
    const beneficiar = await beneficiaries.findOne({ _id: receiverAccId });
    // console.log('benificiar' + beneficiar);
    if (beneficiar.userId == userId) {
      try {
        const account = await accounts.findOne({
          _id: beneficiar.userAccountId,
        });
        // console.log(account);
        if (account && account.balance >= amount) {
          const balance = account.balance - amount;
          //   console.log(balance);
          const update = await account.updateOne(
            {
              balance: balance,
            },
            {
              new: true,
            }
          );

          const transcation = await transactions.create({
            senderAccId: beneficiar.userAccountId,
            receiverAccId,
            amount,
          });
          const receipt = await receipts.create({
            senderAccNo: beneficiar.beneficiarieAccountNo,
            receiverAccNo: account.accountNo,
            amount,
          });
        } else {
          res.send('Transcation is not possible');
        }
      } catch (err) {
        console.log(err);
      }
    }
  },
};

module.exports = transactionServices;
