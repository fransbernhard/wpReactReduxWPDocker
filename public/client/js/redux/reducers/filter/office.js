import { FETCH_OFFICES } from "../../action-types/index"

const office = (state = [], action) => {
  switch (action.type) {
    case FETCH_OFFICES:
      return action.payload
    default:
      return state
  }
}

export default office
