const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/**
 * signup
 */
router.post('/register', userController.createUser, (req, res) => {
  return res.status(200).json(res.locals.newUser);
});

// /**
//  * login
//  */

router.post('/login', userController.verifyUser, (req, res) => {
  // what should happen here on successful log in?
});

/**
 * Authorized routes
 */

module.exports = router;
