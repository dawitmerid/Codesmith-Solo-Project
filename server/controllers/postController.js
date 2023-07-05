const { default: mongoose } = require('mongoose');
const models = require('../models/models');
const postController = {};

postController.getPosts = async (req, res, next) => {
  models.Posts.find({})
    .then((fetchedDoc) => {
      res.locals.posts = fetchedDoc;
      return next();
    })
    .catch((error) => {
      return next({
        log: `Express error handler caught unknown middleware error: ERROR : ${error}`,
        status: err.status || 400,
      });
    });

  //   try {
  //     const allPosts = await models.Posts.find();
  //     res.locals.posts = allPosts;
  //     return next();
  //   } catch (error) {
  //     return next({
  //       log: `Express error handler caught unknown middleware error : ERROR : ${error}`,
  //       status: error.status || 500,
  //       message: 'An error occurred',
  //     });
  //   }
};

postController.createPost = async (req, res, next) => {
  console.log('reached createpost middleware');
  models.Posts.create(req.body)
    .then((createdDoc) => {
      console.log('CREATED DOC');
      res.locals.newPost = createdDoc;
      console.log('SAVED A DOC');
      return next();
    })
    .catch((error) => {
      console.log('ENTER ERROR');
      return next({
        log: `Express error handler caught unknown middleware error: ERROR : ${error}`,
        status: err.status || 400,
      });
    });
};

postController.deletePost = (req, res, next) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No post with that id');

  models.Posts.findByIdAndRemove(id)
    .then((deletedDoc) => {
      res.locals.deletedPost = deletedDoc;
      return next();
    })
    .catch((error) => {
      console.log('ENTER ERROR');
      return next({
        log: `Express error handler caught unknown middleware error: ERROR : ${error}`,
        status: err.status || 400,
      });
    });
};

module.exports = postController;
