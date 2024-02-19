import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import sagaData from './saga/saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({thunk: false}),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(sagaData);

export default store;
