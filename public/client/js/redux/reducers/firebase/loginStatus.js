import { LOGIN_STATUS } from "../../action-types/index"

const loginStatus = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_STATUS:
      return action.payload
    default:
      return state
  }
}

export default loginStatus
