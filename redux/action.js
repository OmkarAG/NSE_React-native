import {
  SET_PORTFOLIO_STOCK,
  GET_STOCKS,
  GET_WATCHLIST_STOCKS,
  REMOVE_WATCHLIST_STOCK,
  SET_WATCHLIST_STOCKS,
  REMOVE_PORTFOLIO_STOCK,
  SORT_PORTFOLIO_STOCKS,
  GET_ALL_INDICES,
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

export function setPortfolioStock(payload) {
  // console.warn("payload is ",payload)
  return {
    type: SET_PORTFOLIO_STOCK,
    stock: payload,
  };
}

export function removePortfolioStock(payload) {
  // console.warn("payload is ",payload)
  return {
    type: REMOVE_PORTFOLIO_STOCK,
    stock: payload,
  };
}

export function sortPortfolioStocks(payload) {
  // console.warn("payload is ",payload)
  return {
    type: SORT_PORTFOLIO_STOCKS,
    type: payload,
  };
}

export function getAllIndices(payload){
  return{
    type:GET_ALL_INDICES,
  }
}
