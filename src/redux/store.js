import {createStore, applyMiddleware} from 'redux';
// =========================================================

import {persistStore, persistReducer} from 'redux-persist';
// =========================================================
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './reducers';
import {AsyncStorage} from 'react-native';
// =========================================================
let value = AsyncStorage == null ? '' : AsyncStorage;
let persistConfig = {
  key: 'root',
  storage: value,
  whitelist: ['auth'],
};

let persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(
  persistedReducer, // root reducer => persited reducers
  applyMiddleware(promiseMiddleware, logger),
);

let persistor = persistStore(store);
// ========================================================
export default {store, persistor};
