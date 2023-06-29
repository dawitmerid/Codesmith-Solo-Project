const express = require('express');

const cookieController = require('../controllers/cookieController');
const sessionController = require('../controllers/sessionController');
const userController = require('../controllers/userController');

const router = express.Router();

/**
 * signup
 */
// router.get('/signup', userController.createUser, (req, res) => {});

// /**
//  * login
//  */

router.route('/').get((req, res) => {});

// app.post('/login', userController.verifyUser, (req, res) => {
//   // what should happen here on successful log in?
// });

/**
 * Authorized routes
 */
// router.get('/dashboard', (req, res) => {
//   // res.sendFile(path.resolve(__dirname, '../client/secret.html'));
// });

module.exports = router;
