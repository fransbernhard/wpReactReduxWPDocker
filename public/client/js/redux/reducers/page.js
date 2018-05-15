import { FETCH_PAGE_BY_SLUG } from "../action-types/index"

const page = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PAGE_BY_SLUG:
      return action.payload
    default:
      return state
  }
}

export default page
