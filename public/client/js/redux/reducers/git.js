import { FETCH_GITHUB_POSTS } from "../action-types/index"

const git = (state = {}, action) => {
  switch (action.type) {
    case FETCH_GITHUB_POSTS:
      return action.payload
    default:
      return state
  }
}

export default git
