import * as types from "../action-types/index";

export const fetchAll = (URL) => {
  return (dispatch) => {
    dispatch(fetchRequest());
    return fetchPosts(URL).then(([response, json]) => {
      if(response.status === 200){
        if(URL.indexOf('posts') > -1){
          dispatch(fetchPostsSuccess(json))
        } else if (URL.indexOf('pages') > -1) {
          dispatch(fetchPagesSuccess(json))
        } else if (URL.indexOf('github') > -1){
          dispatch(fetchGithubSuccess(json))
        } else if (URL.indexOf('instagram') > -1){
          dispatch(fetchInstaSuccess(json.data))
        } else {
          dispatch(fetchError())
        }
      } else {
        dispatch(fetchError())
      }
    })
  }
}

export const fetchAllFlowers = (URL) => {
  return (dispatch) => {
    dispatch(fetchRequest());
    return fetchPosts(URL).then(([response, json]) => {
      if(response.status === 200){
        dispatch(fetchFlowerPostsSuccess(json))
      } else {
        dispatch(fetchError())
      }
    })
  }
}

export const fetchAllWcProducts = (URL) => {
  return (dispatch) => {
    dispatch(fetchRequest());
    return fetchPosts(URL).then(([response, json]) => {
      if(response.status === 200){
        dispatch(fetchFlowerPostsSuccess(json))
      } else {
        dispatch(fetchError())
      }
    })
  }
}

const fetchRequest = () => {
  return {
    type: types.FETCH_REQUEST
  }
}

const fetchPosts = (URL) => {
  return fetch(URL, { method: 'GET'})
    .then( response => Promise.all([response, response.json()]));
}

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

const fetchPagesSuccess = payload => {
  return {
    type: types.FETCH_PAGES_SUCCESS,
    payload
  }
}

const fetchPostsSuccess = (payload) => {
  return {
    type: types.FETCH_POSTS_SUCCESS,
    payload
  }
}

const fetchFlowerPostsSuccess = (payload) => {
  return {
    type: types.FETCH_FLOWER_POSTS_SUCCESS,
    payload
  }
}

const fetchAllWcProductsSuccess = (payload) => {
  return {
    type: types.FETCH_WC_PRODUCTS_SUCCESS,
    payload
  }
}

const fetchError = () => {
  return {
    type: types.FETCH_ERROR
  }
}
