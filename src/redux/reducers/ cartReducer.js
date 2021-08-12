import cartActionTypes from "../actions/CartActions/cartActionTypes";

export default function cartReducer(state = {}, action) {
  let newState = {};
  switch (action.type) {
    case cartActionTypes.ADD_TO_CART:
      newState = { ...state, cartItems: [...state.cartItems, action.item] };
      break;
    case cartActionTypes.DELETE_ITEM_FROM_CART:
      newState = { ...state, cartItems: action.newitemCart };
      break;
    default:
      newState = state;
      break;
  }
  return newState;
}
