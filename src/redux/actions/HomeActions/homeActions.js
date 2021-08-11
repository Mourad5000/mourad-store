import axios from "axios";
import homeActionTypes from "./homeActionTypes";

export function getAllItemsSucess(items) {
  return {
    type: homeActionTypes.GET_ALL_ITEMS,
    items,
  };
}

export function getAllItems() {
  return async (dispatch) => {
    try {
      const endPoint = "https://fakestoreapi.com/products";
      const { data } = await axios.get(endPoint);
      dispatch(getAllItemsSucess(data));
    } catch (error) {
      console.log(error);
    }
  };
}
