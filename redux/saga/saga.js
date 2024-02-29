import {takeEvery, put} from 'redux-saga/effects';
import {
  SET_STOCKS,
  GET_STOCKS,
  GET_WATCHLIST_STOCKS,
  SET_WATCHLIST_STOCKS,
  GET_ALL_INDICES,
} from '../constants';
import {stocks, watchlistStocks} from './stocks';

function* StocksList() {
  console.log('saga stockslist called');
  yield put({type: SET_STOCKS, stocks});
}

function* WatchlistStocks() {
  console.log('saga watchlist stocks called');
  yield put({type: SET_WATCHLIST_STOCKS, watchlistStocks});
}

function* getAllIndices() {
  try {
    console.log('getting all indices');
    const indices = yield call('https://www.nseindia.com/api/allIndices');
    console.log(indices);
  } catch (error) {
    yield put(apiError(error));
  }
}

function* sagaData() {
  yield takeEvery(GET_STOCKS, StocksList);
  yield takeEvery(GET_WATCHLIST_STOCKS, WatchlistStocks);
  yield takeEvery(GET_ALL_INDICES, getAllIndices);
}

export default sagaData;
