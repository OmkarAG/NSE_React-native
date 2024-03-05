import {combineReducers} from 'redux';
import {reducer} from './reducer';
import {watchlist} from './watchlist';
import {portfolio} from './portfolio';
import {indices} from './indices';
import { derivatives } from './derivatives';

export default combineReducers({
  stocks: reducer,
  watchlistStocks: watchlist,
  portfolioStocks: portfolio,
  indices: indices,
  derivatives:derivatives
});
