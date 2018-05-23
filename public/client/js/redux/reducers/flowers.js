import { FETCH_FLOWER_POSTS_SUCCESS } from "../action-types/index"

const flowers = (state = [], action) => {
  switch (action.type) {
    case FETCH_FLOWER_POSTS_SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default flowers
