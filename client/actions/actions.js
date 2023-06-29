// import actionType constants
import * as types from '../constants/actionTypes';
import * as api from '../axios.js';

export const fetchAllActionCreator = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    return dispatch({ type: types.FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPostActionCreator = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    return dispatch({ type: types.CREATE_POST, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// build an addMarket function

// build a deleteCard function

// add more action creators
