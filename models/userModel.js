const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, 'Please provide your name'],
    },
    contact: {
      type: String,
      required: [true, 'Please provide your contact'],
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
    },
    password: {
      type: String,
      required: [true, 'Please provide your account password'],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  const password = await bcrypt.compare(enteredPassword, this.password);
  return password;
};

module.exports = mongoose.model('Users', userSchema);
