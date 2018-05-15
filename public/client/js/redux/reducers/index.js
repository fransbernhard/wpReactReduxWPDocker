import { combineReducers } from 'redux'
import posts from './posts'
import pages from './pages'
import insta from './insta'
import page from './page'
import git from './git'

const mimiApp = combineReducers({
  posts,
  git,
  insta,
  pages,
  page
})

export default mimiApp;
