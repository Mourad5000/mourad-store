import axios from "axios";
import productActionTypes from "./productActionTypes";

export function getItemSuccess(item) {
  return {
    type: productActionTypes.GET_ITEM_DETAIL,
    item,
  };
}

export function getItemError(error) {
  return {
    type: productActionTypes.GET_ITEM_DETAIL_ERROR,
    error,
  };
}

export function loadingItem() {
  return {
    type: productActionTypes.LOADING_ITEM_DETAIL,
  };
}

export function getOneItem(id) {
  return async (dispatch) => {
    try {
      dispatch(loadingItem());
      const endPoint = `https://fakestoreapi.com/products/${id}`;
      const { data } = await axios.get(endPoint);
      dispatch(getItemSuccess(data));
    } catch (error) {
      dispatch(getItemError(error));
    }
  };
}

export function deleteItemDetail() {
  return {
    type: productActionTypes.DELETE_ITEM_DETAIL,
  };
}
