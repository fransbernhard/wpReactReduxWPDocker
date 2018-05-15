import * as types from "../action-types/index";

export const fetchAll = (URL, SLUG) => {
  let URLEN;

  if(!SLUG){
    URLEN = URL
  } else {
    URLEN = URL + "?slug=" + SLUG
  }

  return (dispatch) => {
    dispatch(fetchRequest());
    return fetchPosts(URLEN).then(([response, json]) => {
      if(response.status === 200){
        if(!SLUG){
          if(URLEN.indexOf('posts') > -1){
            dispatch(fetchPostsSuccess(json))
          } else if (URLEN.indexOf('pages') > -1) {
            dispatch(fetchPagesSuccess(json))
          } else if (URLEN.indexOf('github') > -1){
            dispatch(fetchGithubSuccess(json))
          } else if (URLEN.indexOf('instagram') > -1){
            console.log(json);
            dispatch(fetchInstaSuccess(json.data))
          } else {
            dispatch(fetchError())
          }
        } else {
          dispatch(fetchPageBySlugSuccess(json))
        }
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

const fetchPageBySlugSuccess = payload => {
  return {
    type: types.FETCH_PAGE_BY_SLUG,
    payload
  }
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

const fetchError = () => {
  return {
    type: types.FETCH_ERROR
  }
}
