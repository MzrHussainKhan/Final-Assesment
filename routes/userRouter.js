const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');
const { protected } = require('../middleware/authMiddleware');

router.post('/signup', async (req, res) => {
  try {
    const data = await userControllers.create(req, res);
    res.send(data);
  } catch (err) {
    console.error(err);
  }
});
router.post('/login', async (req, res) => {
  try {
    const auth = await userControllers.userAuth(req, res);
    return auth;
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
