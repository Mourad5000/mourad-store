/* eslint-disable no-unused-vars */
import homeActionTypes from "../actions/homeActions/homeActionTypes";

export default function mainReducer(state = {}, action) {
  let newState = {};
  switch (action.type) {
    case homeActionTypes.GET_ALL_ITEMS:
      newState = { ...state, items: action.items };
      break;
    default:
      newState = state;
      break;
  }
  return newState;
}
