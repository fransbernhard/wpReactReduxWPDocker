import { FETCH_INSTA_POSTS } from "../action-types/index"

const insta = (state = {}, action) => {
  switch (action.type) {
    case FETCH_INSTA_POSTS:
      return action.payload
    default:
      return state
  }
}

export default insta
