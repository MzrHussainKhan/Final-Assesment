const express = require('express');
const router = express.Router();
const beneficiariesController = require('../controllers/beneficiariesControllers');

const { protected } = require('../middleware/authMiddleware');

router.use(protected);

router.post('/', async (req, res) => {
  try {
    const data = await beneficiariesController.create(req, res);
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});
router.get('/', async (req, res) => {
  try {
    const data = await beneficiariesController.find(req, res);
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    let data = await beneficiariesController.Update(req, res);
    //res.send(data);
  } catch (err) {
    console.error(err);
    // res.status(500).json({ message: 'Server error' });
  }
});
router.delete('/delete/:id', async (req, res) => {
  try {
    let data = await beneficiariesController.delete(req, res);
    res.send(data);
  } catch (err) {
    console.error(err);
    // res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
