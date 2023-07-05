// npm install dotenv jsonwebtoken cookie-parser
const models = require('../models/models');

const jwt = require('jsonwebtoken');
require('dotenv').config();

//authoriazation to login
const handleRefreshToken = (req, res, next) => {
  const cookies = req.cookies;

  // console.log(`cookies : ${cookies}`);
  if (!cookies?.jwt)
    return next({
      log: 'Express error handler caught unknown middleware error',
      status: 401,
      message: { err: 'error occurred' },
    });

  //   console.log(cookies.jwt);

  const refreshToken = cookies.jwt;
  console.log(`refresheToken : ${refreshToken}`);
  // find the user that matches the refreshToken
  models.User.findOne({ refreshToken })
    .then((user) => {
      if (!user) {
        console.log('no user found with refreshTokeb');
        // no user was found
        // forbidden
        return res.sendStatus(403);
      } else {
        // evaluate jwt

        jwt.verify(
          refreshToken,
          process.env.REFRESH_TOKEN_SECRET,
          (err, decoded) => {
            if (err || user.username !== decoded.username)
              return res.sendStatus(403);

            const accessToken = jwt.sign(
              { username: decoded.username },
              process.env.ACCESS_TOKEN_SECRET,
              { expiresIn: '30s' }
            );
            res.json({ accessToken });
          }
        );
      }
    })
    .catch((err) => {
      // database error
      return next({
        log: `Error occurred in handleRefreshToken, ERROR : ${err}`,
        status: 500,
        message: { err: 'error occured in token' },
      });
    });
};

module.exports = { handleRefreshToken };
