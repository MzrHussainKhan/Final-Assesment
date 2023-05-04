const express = require('express');
const router = express.Router();
const transcationControllers = require('../controllers/transactionControllers');

const { protected } = require('../middleware/authMiddleware');

router.use(protected);

router.post('/', async (req, res) => {
  try {
    const data = await transcationControllers.create(req, res);
    res.send(data);
  } catch (err) {
    console.error(err);
  }
});
module.exports = router;
