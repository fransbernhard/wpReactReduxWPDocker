import { combineReducers } from 'redux'
import posts from './posts'
import pages from './pages'
import insta from './insta'
import git from './git'
import flowers from './flowers'
import wcProducts from './wcProducts'

const app = combineReducers({
  posts,
  git,
  insta,
  pages,
  flowers,
  wcProducts
})

export default app
