import { CHANGE_ITEMS_TO_DISPLAY } from './types'

export const changeItemsToDisplay = (payload) => {
  return { 
    type: CHANGE_ITEMS_TO_DISPLAY, 
    payload 
  }
}