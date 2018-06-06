import { createStore, applyMiddleware, compose } from 'redux'
import reducer from "../reducers/index"
import {createLogger} from "redux-logger"
import thunk from 'redux-thunk'

import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
export const history = createHistory()

const initialState = {}
const enhancers = []
const logger = createLogger()
const middleware = [
  logger,
  thunk,
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  reducer,
  initialState,
  composedEnhancers
)

export default store
