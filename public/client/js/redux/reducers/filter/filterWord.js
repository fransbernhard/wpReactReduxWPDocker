import { UPDATE_FILTER } from "../../action-types/index"

const filterWord = (state = [], action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return action.payload
    default:
      return state
  }
}

export default filterWord
