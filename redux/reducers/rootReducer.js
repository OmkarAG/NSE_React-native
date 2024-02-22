import {combineReducers} from 'redux';
import {reducer} from './reducer';
import {watchlist} from './watchlist';

export default combineReducers({
  stocks: reducer,
  watchlistStocks: watchlist,
});
