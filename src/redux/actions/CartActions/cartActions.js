import cartActionTypes from "./cartActionTypes";

export function addToCart(item) {
  return {
    type: cartActionTypes.ADD_TO_CART,
    item,
  };
}

export function useless() {
  return 1;
}
