import { CHANGE_ITEMS_TO_DISPLAY } from '../actions/types'

const INITIAL_STATE = {
  itemsToDisplay: 5,
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
  }
}