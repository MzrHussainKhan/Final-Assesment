const express = require('express');
const router = express.Router();
const accountControllers = require('../controllers/accountControllers');

const { protected } = require('../middleware/authMiddleware');

router.use(protected);

router.post('/', async (req, res) => {
  try {
    const data = await accountControllers.create(req, res);
    res.send(data);
  } catch (err) {
    console.error(err);
  }
});

router.get('/getall', async (req, res) => {
  try {
    let data = await accountControllers.findAll(req, res);
    res.send(data);
    // return data;
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.put('/update/:id', async (req, res) => {
  try {
    let data = await accountControllers.Update(req, res);
    //res.send(data);
  } catch (err) {
    console.error(err);
    // res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    let data = await accountControllers.deleteAccount(req, res);
    res.send(data);
  } catch (err) {
    console.error(err);
    // res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
