import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {render} from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'
import './app.scss'
import Home from './js/components/Home.js'
import About from './js/components/About.js'
import Wordpress from './js/components/Wordpress.js'
import Info from './js/components/Info.js'
import Header from './js/components/common/Header.js'

import store from "./js/redux/store/index"

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route exact path={'/about'} component={About}/>
            <Route exact path={'/wordpress'} component={Wordpress}/>
            <Route exact path={'/info'} component={Info}/>
            <Route render={() => { return <Redirect to="/" />}} />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

render(<App/>, document.getElementById('app'))

if (module.hot) { module.hot.accept() }
