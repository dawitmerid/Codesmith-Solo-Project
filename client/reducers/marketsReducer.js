// import * as types from '../constants/actionTypes';

// const initialState = {
//   totalMarkets: 0,
//   totalCards: 0,
//   marketList: [],
//   lastMarketId: 10000,
//   newLocation: '',
// };

// const marketsReducer = (state = initialState, action) => {
//   let marketList;

//   switch (action.type) {
//     case types.ADD_MARKET: {
//       // increment lastMarketId and totalMarkets counters
//       console.log('action registered!');
//       // create the new market object from provided data
//       const newMarket = {
//         id: state.lastMarketId + 1, // Example: Incrementing the id
//         name: action.payload.name, // Example: Getting the name from action payload
//         // Add other properties based on your requirements
//       };

//       // push the new market onto a copy of the market list
//       marketList = state.marketList.slice();
//       marketList.push(newMarket);

//       // return updated state
//       return {
//         ...state,
//         marketList,
//         lastMarketId: state.lastMarketId + 1, // Example: Updating the lastMarketId
//         totalMarkets: state.totalMarkets + 1, // Example: Incrementing the totalMarkets
//         newLocation: '',
//       };
//     }

//     default: {
//       return state;
//     }
//   }
// };

// export default marketsReducer;
