const express = require('express');
const path = require('path');
const cookieController = require('../controllers/cookieController');
const sessionController = require('../controllers/sessionController');
const userController = require('../controllers/userController');

const router = express.Router();

// router.get('/catagory/event', postController.getAllPost, (req, res) => {});

router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/index.html'));
});

module.exports = router;
