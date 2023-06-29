import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleWare from 'redux-thunk';

// we are adding composeWithDevTools here to get easy access to the Redux dev tools

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleWare));
const store = createStore(reducers, composedEnhancer);

export default store;
