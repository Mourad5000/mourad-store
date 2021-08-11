import axios from "axios";
import homeActionTypes from "./homeActionTypes";

export function getItemsLoading() {
  return {
    type: homeActionTypes.GET_ITEMS_LOADING,
  };
}

export function getAllItemsSucess(items) {
  return {
    type: homeActionTypes.GET_ALL_ITEMS,
    items,
  };
}

export function getAllItemsError(error) {
  return {
    type: homeActionTypes.GET_ALL_ITEMS_ERROR,
    error,
  };
}

export function getAllItems() {
  return async (dispatch) => {
    try {
      dispatch(getItemsLoading());
      const endPoint = "https://fakestoreapi.com/products";
      const { data } = await axios.get(endPoint);
      dispatch(getAllItemsSucess(data));
    } catch (error) {
      dispatch(getAllItemsError(error));
    }
  };
}

export function getItemSuccess(item) {
  return {
    type: homeActionTypes.GET_ITEM_DETAIL,
    item,
  };
}

export function getItemError(error) {
  return {
    type: homeActionTypes.GET_ITEM_DETAIL_ERROR,
    error,
  };
}

export function getOneItem(id) {
  return async (dispatch) => {
    try {
      const endPoint = `https://fakestoreapi.com/products/${id}`;
      const { data } = await axios.get(endPoint);
      console.log(data);
      dispatch(getItemSuccess(data));
    } catch (error) {
      dispatch(getItemError(error));
    }
  };
}
