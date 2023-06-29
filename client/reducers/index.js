import { combineReducers } from 'redux';

// import all reducers here
import postsReducer from './postReducer';

// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  posts: postsReducer,
});

// make the combined reducers available for import
export default reducers;
