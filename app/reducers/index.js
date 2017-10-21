import { CHANGE_ITEMS_TO_DISPLAY, SELECT_PAGE, SIGN_IN, SIGN_OUT } from '../actions/types'
import data from '../data'

const INITIAL_STATE = {
  signedIn: false,
  itemsToDisplay: 10,
  data,
  selectedPage: 1
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
    case SELECT_PAGE: {
      return {
        ...state,
        selectedPage: payload,
      }
    }
    case SIGN_IN: {
      return {
        ...state,
        signedIn: true
      }
    }
    case SIGN_OUT: {
      return {
        ...state,
        signedIn: false
      }
    }
    default: {
      return INITIAL_STATE
    }
  }
}