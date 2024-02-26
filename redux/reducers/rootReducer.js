import {combineReducers} from 'redux';
import {reducer} from './reducer';
import {watchlist} from './watchlist';
import { portfolio } from './portfolio';

export default combineReducers({
  stocks: reducer,
  watchlistStocks: watchlist,
  portfolioStocks:portfolio,
});
