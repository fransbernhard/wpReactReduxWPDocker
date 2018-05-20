import { combineReducers } from 'redux'
import posts from './posts'
import pages from './pages'
import insta from './insta'
import git from './git'

const app = combineReducers({
  posts,
  git,
  insta,
  pages
})

export default app
