import { combineReducers } from 'redux'
// INFO
import insta from './info/insta'
import git from './info/git'

// WORDPRESS
import flowers from './wordpress/flowers'
import posts from './wordpress/posts'
import pages from './wordpress/pages'
import post from './wordpress/post'

// FILTER
import rows from './filter/rows'
import office from './filter/office'
import searchWord from './filter/searchWord'
import filterWord from './filter/filterWord'

// FIREBASE
import fbposts from './firebase/fbposts'
import login from './firebase/login'
import register from './firebase/register'

const app = combineReducers({
  flowers,
  posts,
  post,
  pages,
  git,
  insta,
  login,
  register,
  fbposts
})

export default app
