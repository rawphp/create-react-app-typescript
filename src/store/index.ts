import { routerMiddleware } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, compose, createStore } from 'redux';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import { persistReducer, persistStore } from 'redux-persist';
import { PersistConfig } from 'redux-persist/es/types';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { reducers } from '../reducers';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig: PersistConfig = {
  key: 'store',
  storage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const history = createHistory();
const historyMiddleware = routerMiddleware(history);

const enhancer = composeEnhancers(applyMiddleware(historyMiddleware, thunk, reduxPackMiddleware));

const store = createStore(persistedReducer as any, enhancer);

const persistor = persistStore(store);

export { store, persistor, history };
