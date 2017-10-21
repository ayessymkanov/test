import { CHANGE_ITEMS_TO_DISPLAY } from '../actions/types'
import data from '../data'

const INITIAL_STATE = {
  itemsToDisplay: 10,
  data
}
export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch(type) {
    case CHANGE_ITEMS_TO_DISPLAY: {
      return {
        ...state,
        itemsToDisplay: payload
      }
    }
    default: {
      return INITIAL_STATE
    }
  }
}