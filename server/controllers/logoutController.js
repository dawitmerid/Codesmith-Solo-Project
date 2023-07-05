// npm install dotenv jsonwebtoken cookie-parser
const models = require('../models/models');

//authoriazation to login
const handleLogout = (req, res, next) => {
  // On client , also delete the accessToken
  const cookies = req.cookies;

  if (!cookies?.jwt)
    return next({
      log: 'Express error handler caught unknown middleware error',
      status: 204, // no content to send back
      message: { err: 'error occurred' },
    });

  const refreshToken = cookies.jwt;
  // find the user that matches the refreshToken
  models.User.findOne({ refreshToken })
    .then((user) => {
      if (!user) {
        // no user was found clear the cookie
        res.clearCookie('jwt', {
          httpOnly: true,
        });
        return res.sendStatus(204);
      } else {
        // delete refreshToken in database
        models.User.findOneAndUpdate(
          { refreshToken },
          { $set: { refreshToken: '' } },
          { new: true }
        )
          .then((updatedDoc) => {
            // console.log(updatedDoc);
          })
          .catch((error) => {
            console.log(error);
          });

        res.clearCookie('jwt', {
          httpOnly: true,
        });
        res.sendStatus(204);
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

module.exports = { handleLogout };
