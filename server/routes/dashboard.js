const express = require('express');
const path = require('path');
const postController = require('../controllers/postController');

const router = express.Router();

// router.get('/catagory/event', postController.getAllPost, (req, res) => {});

router.get('/getall', postController.getPosts, (req, res) => {
  return res.status(200).json(res.locals.posts);
  // res.sendFile(path.resolve(__dirname, '../../client/index.html'));
});

router.post('/create', postController.createPost, (req, res) => {
  console.log('IN THE POST ROUTER /CREATE');
  return res.status(200).json(res.locals.newPost);
});

router.delete('/:id', postController.deletePost, (req, res) => {
  return res.status(200).json(res.locals.deletePost);
});

module.exports = router;
