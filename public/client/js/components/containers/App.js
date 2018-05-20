import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'

import { connect } from "react-redux"
import { fetchAll } from "../../redux/actions/index"
import { bindActionCreators } from "redux"

import Home from '../Home.js'
import About from '../About.js'
import Wordpress from './Wordpress.js'
import Info from './Info.js'
import Single from '../Single.js'
import Header from '../common/Header.js'

import store from "../../redux/store/index"

class App extends Component {
  componentDidMount(){
    const APP_URL = 'http://0.0.0.0:80'
    const POST_URL = `${APP_URL}/wp-json/wp/v2/posts?per_page=30`

    this.props.fetchAll(POST_URL)

    this.buildPostRoutes = this.buildPostRoutes.bind(this)
  }

  buildPostRoutes(data){
    return data.map((post,i) => {
      return (
        <Route
          key={i}
          component={Single}
          path={`/archive/${post.slug}`}
        />
      )
    })
  }

  render(){
    return (
      <div>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path={'/'} component={Home}/>
              <Route exact path={'/about'} component={About}/>
              <Route exact path={'/wordpress'} component={Wordpress}/>
              <Route exact path={'/info'} component={Info}/>
              {this.buildPostRoutes(this.props.posts)}
              <Route render={() => { return <Redirect to="/" />}} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchAll}, dispatch)
}

const mapStateToProps = posts => {
  return posts
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
