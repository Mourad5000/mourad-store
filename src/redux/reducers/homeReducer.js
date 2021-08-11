/* eslint-disable no-unused-vars */
import homeActionTypes from "../actions/HomeActions/homeActionTypes";

export default function homeReducer(state = {}, action) {
  let newState = {};
  switch (action.type) {
    case homeActionTypes.GET_ITEMS_LOADING:
      newState = { ...state, loadingItems: true };
      break;
    case homeActionTypes.GET_ALL_ITEMS:
      newState = { ...state, items: action.items, loadingItems: false };
      break;
    default:
      newState = state;
      break;
  }
  return newState;
}
