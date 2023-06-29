const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://dawitmerid:oABMuY1TjVAVb588@cluster0.95z7fts.mongodb.net/?retryWrites=true&w=majority';

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

const Schema = mongoose.Schema;

// sets a schema for the 'user' collection
const userSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  pic_url: String,
  post: [{ id: { type: Schema.Types.ObjectId, ref: 'post' } }],
  likes: [{ id: { type: Schema.Types.ObjectId, ref: 'post' } }],
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
