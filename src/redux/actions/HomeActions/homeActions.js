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

export function getAllItems() {
  return async (dispatch) => {
    try {
      dispatch(getItemsLoading());
      const endPoint = "https://fakestoreapi.com/products";
      const { data } = await axios.get(endPoint);
      console.log(data);
      dispatch(getAllItemsSucess(data));
    } catch (error) {
      console.log(error);
    }
  };
}
