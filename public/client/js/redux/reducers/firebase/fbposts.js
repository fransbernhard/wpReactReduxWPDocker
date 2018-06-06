import { FETCH_FBPOSTS_SUCCESS, FETCH_FBPOSTS, FETCH_FBPOSTS_ERROR } from "../../action-types/index"
import store from "../../store/index"

const fbposts = (state = [], action) => {
  switch (action.type) {
    case FETCH_FBPOSTS:
      const URL = 'https://jsonplaceholder.typicode.com/posts'
      fetch(URL)
        .then( res => {
          if(res.status === 200){
            return res.json()
          } else {
            console.log("ERROR IN FETCH FB POSTS")
          }
        }).then( json => {
          store.dispatch({
            type: FETCH_FBPOSTS_SUCCESS,
            payload: json
          })
        }).catch( e => {
          store.dispatch({
            type: FETCH_FBPOSTS_ERROR,
            payload: e
          })
        })
      return state
    case FETCH_FBPOSTS_SUCCESS:
      return action.payload
    case FETCH_FBPOSTS_ERROR:
      return action.payload
    default:
      return state
  }
}

export default fbposts
