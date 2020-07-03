import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga"
import { composeWithDevTools } from 'redux-devtools-extension';
import globalSaga from "../Sagas"


import reducers from "./reducers";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(globalSaga);
export default store