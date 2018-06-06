import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from "./js/redux/store/index"

import App from './js/components/App'

import './app.scss'

const Init = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

render(<Init/>, document.getElementById('app'))

if (module.hot) { module.hot.accept() }
