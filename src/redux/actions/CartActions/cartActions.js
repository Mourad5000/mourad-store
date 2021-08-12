/* eslint-disable no-debugger */
import cartActionTypes from "./cartActionTypes";

export function addToCart(item) {
  return {
    type: cartActionTypes.ADD_TO_CART,
    item,
  };
}
export function deleteFromCart(itemToDelete, cart) {
  const newitemCart = cart.filter((item) => item.id !== itemToDelete.id);
  return {
    type: cartActionTypes.DELETE_ITEM_FROM_CART,
    newitemCart,
  };
}
