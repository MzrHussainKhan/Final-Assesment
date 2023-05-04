const express = require('express');
const router = express.Router();

const userRouter = require('./routes/userRouter');
const accountRouter = require('./routes/accountRouter');
const beneficiariesRouter = require('./routes/beneficiariesRouter');
const transcationRouter = require('./routes/transcationRouter');

router.use('/users', userRouter);
router.use('/account', accountRouter);
router.use('/beneficiaries', beneficiariesRouter);
router.use('/transcations', transcationRouter);

module.exports.router = router;
