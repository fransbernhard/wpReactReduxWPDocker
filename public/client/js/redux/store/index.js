import { createStore, applyMiddleware } from 'redux';
import reducer from "../reducers/index";
import {createLogger} from "redux-logger";
import thunk from 'redux-thunk';
import reduxPromise from "redux-promise";

const logger = createLogger();
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(logger, thunk, reduxPromise));

export default store;
