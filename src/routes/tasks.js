const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.get('/', async (req, res) => {
  const task = await Task.find();
  res.json(task);
});

router.post('/', async (req, res) => {

});

module.exports = router;