import { FETCH_FLOWER_POSTS_SUCCESS, FETCH_FLOWER_POSTS} from "../../action-types/index"
import store from "../../store/index"

const flowers = (state = [], action) => {
  switch (action.type) {
    case FETCH_FLOWER_POSTS:
      const APP_URL = 'http://0.0.0.0:80'
      const FLOWERS_URL = `${APP_URL}/wp-json/wp/v2/flower_product`

      fetch(FLOWERS_URL)
        .then( res => {
          if(res.status === 200){
            return res.json()
          } else {
            console.log("ERROR IN FETCH FLOWERS")
          }
        }).then( json => {
          store.dispatch({
            type: FETCH_FLOWER_POSTS_SUCCESS,
            payload: json
          })
        })
      return state
    case FETCH_FLOWER_POSTS_SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default flowers
