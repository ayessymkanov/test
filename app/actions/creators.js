import { CHANGE_ITEMS_TO_DISPLAY, SELECT_PAGE, SIGN_IN, SIGN_OUT } from './types'

export const changeItemsToDisplay = (payload) => {
  return { 
    type: CHANGE_ITEMS_TO_DISPLAY, 
    payload 
  }
}

export const selectPage = (payload) => {
  return {
    type: SELECT_PAGE,
    payload
  }
}

export const signIn = () => {
  return {
    type: SIGN_IN
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  }
}