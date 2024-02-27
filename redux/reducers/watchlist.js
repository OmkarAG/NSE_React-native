import { ToastAndroid } from 'react-native';
import {REMOVE_WATCHLIST_STOCK, SET_WATCHLIST_STOCKS} from '../constants';

const initialState = [];

export const watchlist = (state = initialState, action) => {
  switch (action.type) {
    case SET_WATCHLIST_STOCKS:
      // console.warn('Stock Added Successfully ');
        ToastAndroid.show('Stock Added Successfully', ToastAndroid.SHORT);
      return [...state, ...action.watchlistStocks];

    case REMOVE_WATCHLIST_STOCK:
      state = state.filter(s => s.symbol !== action.stock.symbol);
      // console.warn("Stock Removed Successfully")
      ToastAndroid.show('Stock Removed Successfully', ToastAndroid.SHORT);
      return state;
    default:
      return state;
  }
};
