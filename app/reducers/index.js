import { CHANGE_ITEMS_TO_DISPLAY, SELECT_PAGE, SIGN_IN_SUCCESS, SIGN_IN_FAIL, SIGN_OUT, EDIT } from '../actions/types'
import data from '../data'

const INITIAL_STATE = {
  signedIn: false,
  signInError: '',
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
    case SIGN_IN_SUCCESS: {
      return {
        ...state,
        signedIn: true
      }
    }
    case SIGN_IN_FAIL: {
      return {
        ...state,
        signInError: 'Error during signing in, please try again.'
      }
    }
    case SIGN_OUT: {
      return {
        ...state,
        signedIn: false
      }
    }
    case EDIT: {
      return {
        ...state,
        data: [...state.data.map(item => {
          return item.id === payload.id ? {...item, title: payload.title} : item
        })]
      }
    }
    default: {
      return INITIAL_STATE
    }
  }
}