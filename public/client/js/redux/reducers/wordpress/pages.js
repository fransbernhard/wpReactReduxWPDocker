import { FETCH_PAGES_SUCCESS } from "../../action-types/index"

const pages = (state = [], action) => {
  switch (action.type) {
    case FETCH_PAGES_SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default pages
