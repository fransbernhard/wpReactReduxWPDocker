import { FETCH_POST_BY_SLUG } from "../../action-types/index"

const post = (state = {}, action) => {
  switch (action.type) {
    case FETCH_POST_BY_SLUG:
      return action.payload
    default:
      return state
  }
}

export default post
