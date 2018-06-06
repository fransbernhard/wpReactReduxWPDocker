import { FETCH_POSTS_SUCCESS } from "../../action-types/index"

const posts = (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default posts
