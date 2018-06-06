import { FETCH_TABLE_SUCCESS } from "../../action-types/index"

const rows = (state = [], action) => {
  switch (action.type) {
    case FETCH_TABLE_SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default rows
