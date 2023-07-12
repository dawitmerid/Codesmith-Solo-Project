const mongoose = require('mongoose');
const dotenv = require('dotenv');
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'codesmith_solo_project',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

// mongoose.set('userFindAndModify', false);

// bcrypt for encrypting the password
const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

// sets a schema for the 'user' collection
const userSchema = new Schema({
  first_name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  last_name: { type: String, required: true },
  password: { type: String, required: true },
  pic_url: String,
  post: [{ id: { type: Schema.Types.ObjectId, ref: 'post' } }],
  likes: [{ id: { type: Schema.Types.ObjectId, ref: 'post' } }],
  refreshToken: String,
});

// mongoose middleware that will run before the save to the collection happen
// the callback here CANNOT be written in arrow function as the context of 'this' is important here
userSchema.pre('save', function (next) {
  // within this context, 'this' refers to the document about to be saved
  // in our case, it should have properties firs_name,last_name,username,....
  bcrypt.hash(this.password, SALT_WORK_FACTOR, (err, hash) => {
    if (err) return next(err);
    // reassign the document's password to it's hashed version
    this.password = hash;
    // this next call makes mongoose move on to the saving the document
    return next();
  });
});
// creats a model for the 'user' collection that will be part of the export

const User = mongoose.model('user', userSchema);

// sets a schema for the 'post' collection
const postSchema = new Schema({
  pic_url: { type: String, required: true },
  location_name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  catagory: { type: String, required: true },
  posted_by: { type: Schema.Types.ObjectId, ref: 'user' },
  liked_by: [{ id: { type: Schema.Types.ObjectId, ref: 'user' } }],
  createdAt: { type: Date, default: new Date() },
  likeCount: { type: Number, default: 0 },
});

// creats a model for the 'user' collection that will be part of the export
const Posts = mongoose.model('post', postSchema);

module.exports = {
  User,
  Posts,
};
