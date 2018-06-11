import { combineReducers } from 'redux'
// INFO
import insta from './info/insta'
import git from './info/git'

// WORDPRESS
import flowers from './wordpress/flowers'
import posts from './wordpress/posts'
import pages from './wordpress/pages'
import post from './wordpress/post'
import woo from './woocommerce/woo'

// FILTER
import rows from './filter/rows'
import office from './filter/office'
import searchWord from './filter/searchWord'
import filterWord from './filter/filterWord'

// FIREBASE
import loginStatus from './firebase/loginStatus'
import fbposts from './firebase/fbposts'
import userInfo from './firebase/userInfo'

const app = combineReducers({
  flowers,
  loginStatus,
  posts,
  post,
  pages,
  git,
  insta,
  userInfo,
  fbposts,
  woo
})

export default app
