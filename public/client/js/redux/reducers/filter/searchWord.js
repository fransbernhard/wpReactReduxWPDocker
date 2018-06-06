import { UPDATE_SEARCHWORD } from "../../action-types/index"

const searchWord = (state = [], action) => {
  switch (action.type) {
    case UPDATE_SEARCHWORD:
      return action.payload
    default:
      return state
  }
}

export default searchWord
