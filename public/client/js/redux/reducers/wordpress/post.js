import { FETCH_POST_BY_SLUG, FETCH_PBS_SUCCESS } from "../../action-types/index"
import store from "../../store/index"

const post = (state = {}, action) => {
  switch (action.type) {
    case FETCH_POST_BY_SLUG:
      fetch(action.payload)
        .then( res => {
          if(res.status === 200){
            return res.json()
          } else {
            console.log("ERROR IN FETCH SINGLE")
          }
        }).then( json => {
          store.dispatch({
            type: FETCH_PBS_SUCCESS,
            payload: json
          })
        }).catch(e => {
          console.log("ERROR: " + e);
        })
      return state
    case FETCH_PBS_SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default post
