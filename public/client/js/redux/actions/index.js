import * as types from "../action-types/index";
import fb from '../../components/Firebase/Database'
import store from "../store/index"

export const fetchAll = URL => {
  fetch(URL).then(res => {
    const json = res.json()
    const status = res.status

    if(status === 200){
      return json
    } else {
      console.log("ERROR RESPONSE STATUS: " + status);
    }
  }).then( json => {
    if(URL.indexOf('posts') > -1){
      store.dispatch(fetchPostsSuccess(json))
    } else if (URL.indexOf('pages') > -1) {
      store.dispatch(fetchPagesSuccess(json))
    } else if (URL.indexOf('github') > -1){
      store.dispatch(fetchGithubSuccess(json))
    } else if (URL.indexOf('instagram') > -1){
      store.dispatch(fetchInstaSuccess(json.data))
    } else {
      console.log("ERROR URL: " + URL)
    }
  })

  return {
    type: 'API CALL'
  }
}

// INFO
const fetchGithubSuccess = payload => {
  return {
    type: types.FETCH_GITHUB_POSTS,
    payload
  }
}

const fetchInstaSuccess = payload => {
  return {
    type: types.FETCH_INSTA_POSTS,
    payload
  }
}

// WORDPRESS
const fetchPagesSuccess = payload => {
  return {
    type: types.FETCH_PAGES_SUCCESS,
    payload
  }
}

const fetchPostsSuccess = payload => {
  return {
    type: types.FETCH_POSTS_SUCCESS,
    payload
  }
}

export const fetchAllFlowers = () => {
  return {
    type: types.FETCH_FLOWER_POSTS
  }
}

export const fetchPostBySlug = URL => {
  return {
    type: types.FETCH_POST_BY_SLUG,
    payload: URL
  }
}

export const fetchAllWcProducts = URL => {
  fetch(URL).then(res => {
    const json = res.json()
    const status = res.status

    if(status === 200){
      return json
    } else {
      console.log("ERROR RESPONSE STATUS: " + status);
    }
  }).then( json => {
    store.dispatch(fetchAllWcProductsSuccess(json))
  })

  return {
    type: 'FETCH ALL WC'
  }
}

export const fetchAllWcProductsSuccess = payload => {
  return {
    type: types.FETCH_WC_PRODUCTS_SUCCESS,
    payload
  }
}

// FIREBASE
export const fetchAllFbPosts = () => {
  return {
    type: types.FETCH_FBPOSTS
  }
}

export const loginStatus = () => {
  var status = true

  var user = fb.auth().currentUser
  user ? status = true : status = false

  return {
    type: types.LOGIN_STATUS,
    payload: status
  }
}
