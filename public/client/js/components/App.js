import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'

import { connect } from "react-redux"
import { fetchAll } from "../redux/actions/index"

import Home from './Home.js'
import Filter from './Filter/Filter.js'
import Wordpress from './Wordpress/Wordpress.js'
import About from './Wordpress/About.js'
import Single from './Wordpress/Single.js'
import Contact from './Wordpress/Contact.js'
import Products from './Wordpress/Products.js'
import Info from './Info/Info.js'
import Header from './common/Header.js'
import Scroll from './Scroll.js'
import Firebase from './Firebase/Firebase.js'

import audio from '../../img/anthony.mp3'
import playImg from '../../img/play.png'
import store from "../redux/store/index"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      time: null
    }

    const APP_URL = 'http://0.0.0.0:80'
    const POST_URL = `${APP_URL}/wp-json/wp/v2/posts?per_page=30`
    const PAGES_URL = `${APP_URL}/wp-json/wp/v2/pages`
    this.props.fetchAll(PAGES_URL)
    this.props.fetchAll(POST_URL)
  }

  componentDidMount(){
    this.tick();
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    )
  }

  toggleAudio(){
    const audio = document.getElementById("audio")
    const play = document.getElementById("play")
    const pause = document.getElementById("pause")

    if (audio.duration > 0 && !audio.paused) {
      audio.pause()
      play.style.display = "block"
      pause.style.display = "none"
    } else {
      audio.play()
      play.style.display = "none"
      pause.style.display = "block"
    }
  }

  componentWillUnmount(){
    clearInterval(this.intervalID);
  }

  tick() {
    const d = new Date();
    const time = ("0" + d.getHours()).slice(-2) + ':' + ("0" + d.getMinutes()).slice(-2) + ':' + ("0" + d.getSeconds()).slice(-2);
    const date = [("0" + d.getDate()).slice(-2),
      ("0" + (d.getMonth() + 1)).slice(-2),
      ("0" + d.getFullYear()).slice(-2)].join('/')

    this.setState({
      time: [date, time].join(' ')
    })
  }

  render(){

    return (
      <div>
        <Router>
          <div>
            <Header />
            <h3 className="time-title font-effect-fire">{this.state.time}</h3>
            <Switch>
              <Route exact path={'/'} component={Home}/>
              <Route exact path={'/about'} component={About}/>
              <Route exact path={'/wordpress'} component={Wordpress}/>
              <Route exact path={'/info'} component={Info}/>
              <Route exact path={'/contact'} component={Contact}/>
              <Route exact path={'/products'} component={Products}/>
              <Route exact path={'/filter'} component={Filter}/>
              <Route exact path={'/scroll'} component={Scroll}/>
              <Route exact path={'/firebase'} component={Firebase}/>
              <Route exact path={'/archive/:query'} component={Single}/>
              <Route render={() => { return <Redirect to="/" /> }} />
            </Switch>

            <div id="move"></div>
            <svg height="24" width="24" id="play"className="triangle" onClick={this.toggleAudio}>
              <polygon points="0,0 0,24 24,12" />
              Sorry, your browser does not support inline SVG.
            </svg>
            <svg height="24" width="24" viewBox="0 0 24 24" id="pause" className="triangle" onClick={this.toggleAudio}>
              <rect x="0" y="0" width="10" height="24"/>
              <rect x="15" y="0" width="10" height="24"/>
              Sorry, your browser does not support inline SVG.
            </svg>

            <audio id="audio" loop>
              <source src={audio} type="audio/mpeg"/>
              Your browser does not support the audio tag.
            </audio>
          </div>
        </Router>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAll: url => dispatch(fetchAll(url))
})

export default connect(null, mapDispatchToProps)(App)


// buildPostRoutes(data){
//   return data.map((post,i) => {
//     return (
//       <Route
//         key={i}
//         component={Single}
//         path={`/archive/${post.slug}`}
//       />
//     )
//   })
// }

// {
//   this.props.posts
//     ? this.buildPostRoutes(this.props.posts)
//     : null
// }
