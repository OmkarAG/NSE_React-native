import {combineReducers} from 'redux';
import {reducer} from './reducer';
import {watchlist} from './watchlist';
import {portfolio} from './portfolio';
import {indices} from './indices';
import { derivatives } from './derivatives';
import { CallAuction } from './callAuction';

export default combineReducers({
  stocks: reducer,
  watchlistStocks: watchlist,
  portfolioStocks: portfolio,
  indices: indices,
  derivatives:derivatives,
  callAuction:CallAuction
});
