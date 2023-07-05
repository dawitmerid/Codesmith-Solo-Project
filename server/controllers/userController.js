// npm install dotenv jsonwebtoken cookie-parser
const { default: mongoose } = require('mongoose');
const models = require('../models/models');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
require('dotenv').config();

// the object container for all the controllers.it will be at the final line below

const userController = {};

// create a new user controller middleware
userController.createUser = (req, res, next) => {
  const { first_name, last_name, username, password, pic_url } = req.body;

  if (!first_name || !last_name || !username || !password || !pic_url)
    return next({
      log: 'All the fields should be filled',
      status: 400,
      message: { err: 'All the fields should be filled' },
    });

  // while we coould have passed in just req.body into the .create, it's not a good practice to do so
  // it is better to be very explicit about what keys you want to send to the database
  // you can't trust anything coming from the frontend like req.body to be what you think it will be
  models.User.create({
    first_name,
    last_name,
    username,
    password,
    pic_url,
  })
    .then((createdDoc) => {
      res.locals.newUser = createdDoc;
      return next();
    })
    .catch((error) => {
      return next({
        log: `Express error handler caught unknown middleware error: ERROR : ${error}`,
        status: error.status || 400,
        message: 'username already taken',
      });
    });
};

//authoriazation to login controller middleware
userController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password)
    return next({
      log: 'Missing username or password in userController.verifyUser',
      status: 400,
      message: { err: 'All the fields should be filled' },
    });

  // use moongose fineOne method
  models.User.findOne({ username })
    .then((user) => {
      if (!user) {
        // no user was found

        return res.sendStatus(401);
        // unauthorized
      } else {
        // username was found, compare the password to the hashed one
        bcrypt
          .compare(password, user.password)
          .then((result) => {
            if (!result) {
              // password did not match
              return res.sendStatus(401);
            } else {
              // password did match, save user for following middlewares
              // create JWTs
              const accessToken = jwt.sign(
                {
                  username: user.username,
                },
                process.env.ACCESS_TOKEN_SECRET,
                {
                  // must be 15 mins
                  expiresIn: '3000s',
                }
              );
              const refreshToken = jwt.sign(
                { username: user.username },
                process.env.REFRESH_TOKEN_SECRET,
                {
                  // must be much longer like 1 day
                  expiresIn: '1d',
                }
              );
              // saving refreshToken in the database to current user. it will be used to cross reference when new accessToken when it is sent back to create another access token
              models.User.findOneAndUpdate(
                { _id: user._id },
                { $set: { refreshToken } },
                { new: true, upsert: true }
              )
                .exec()
                .then((updatedDoc) => {
                  // console.log(`update doc  with refreshToken ${updatedDoc}`);
                })
                .catch((error) => {
                  console.log(error);
                });
              // send the refresh token using cookie and use httpOnly for security reasons. the max age will be 1d
              res.cookie('jwt', refreshToken, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000,
              });
              // send accessToken back to the front End. On the front end DO NOT store this in local storage, instead use the memory
              res.json({ accessToken });
              //return next();
            }
          })
          .catch((err) => {
            // error while bcrypt was running
            return next({
              log: `Error occurred in userController.verifyUser, ERROR : ${err}`,
              status: 500,
              message: { err: 'error had occurred' },
            });
          });
      }
    })
    .catch((err) => {
      // database error
      return next({
        log: `Error occurred in userController.verifyUser, ERROR : ${err}`,
        status: 500,
        message: { err: 'database error' },
      });
    });
};

module.exports = userController;
