import productActionTypes from "../actions/ProductActions/productActionTypes";

export default function productReducer(state = {}, action) {
  let newState = {};
  switch (action.type) {
    case productActionTypes.LOADING_ITEM_DETAIL:
      newState = { ...state, loadingItem: false };
      break;
    case productActionTypes.GET_ITEM_DETAIL:
      newState = { ...state, itemDetail: action.item, loadingItem: false };
      break;
    case productActionTypes.GET_ITEM_DETAIL_ERROR:
      newState = { ...state, itemDetailError: action.error, loadingItem: false };
      break;
    default:
      newState = state;
      break;
  }
  return newState;
}
