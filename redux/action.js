import {ADD_TO_CART, GET_STOCKS} from './constants';

export function getStocks() {
  return {
    type: GET_STOCKS,
  };
}
