import { FETCH_WC_PRODUCTS_SUCCESS } from "../action-types/index"

const wcProducts = (state = [], action) => {
  switch (action.type) {
    case FETCH_WC_PRODUCTS_SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default wcProducts
