import {SET_STOCKS, SET_WATCHLIST_STOCKS} from '../constants';

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STOCKS:
      return action.stocks; // Use action.stocks to update the state
    // case SET_WATCHLIST_STOCKS:
    //   return action.watchlistStocks;
    default:
      return state;
  }
};
