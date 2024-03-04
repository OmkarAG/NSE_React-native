import {combineReducers} from 'redux';
import {reducer} from './reducer';
import {watchlist} from './watchlist';
import {portfolio} from './portfolio';
import {indices} from './indices';

export default combineReducers({
  stocks: reducer,
  watchlistStocks: watchlist,
  portfolioStocks: portfolio,
  indices: indices,
});
