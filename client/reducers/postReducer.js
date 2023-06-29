import * as types from '../constants/actionTypes';

const initialState = [];

const postsReducer = (posts = initialState, action) => {
  let marketList;

  switch (action.type) {
    case types.FETCH_ALL: {
      // increment lastMarketId and totalMarkets counters
      console.log('action FETCH ALL registered!');
      return action.payload;
    }
    case types.CREATE_POST: {
      console.log('action CREATE POST register');
      return [...posts, action.payload];
    }

    default: {
      return posts;
    }
  }
};

export default postsReducer;
