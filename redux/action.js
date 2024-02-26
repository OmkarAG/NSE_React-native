import {
  ADD_TO_CART,
  GET_PORTFOLIO_STOCKS,
  GET_STOCKS,
  GET_WATCHLIST_STOCKS,
  REMOVE_WATCHLIST_STOCK,
  SET_WATCHLIST_STOCKS,
} from './constants';

export function getStocks() {
  return {
    type: GET_STOCKS,
  };
}

export function getWatchlistStocks() {
  return {
    type: GET_WATCHLIST_STOCKS,
  };
}

export function setWatchlistStocks(payload) {
  console.log('payload', payload);
  return {
    type: SET_WATCHLIST_STOCKS,
    watchlistStocks: payload,
  };
}

export function removeStock(payload) {
  console.log('payload', payload);
  return {
    type: REMOVE_WATCHLIST_STOCK,
    stock: payload,
  };
}

// export function getportfolioStocks() {
//   return {
//     type: GET_PORTFOLIO_STOCKS,
//   };
// }
