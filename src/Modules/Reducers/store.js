import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import globalSaga from '../Sagas';

import header from './Header';
import list from './List';
import loading from './Loading';

const rootReducer = combineReducers({
  header,
  list,
  loading,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(globalSaga);
export default store;
