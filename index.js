const express = require('express');
const env = require('dotenv').config();

const { router } = require('./routes');

const app = express();

app.use(express.json());

app.use('/api', router);

app.listen(1003, () => {
  console.log(`Server running on Port : ${1003}`);
});
