import { FETCH_REQUEST, FETCH_PAGES_SUCCESS, FETCH_ERROR } from "../action-types/index"

const pages = (state = [], action) => {
  switch (action.type) {
    case FETCH_PAGES_SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default pages
