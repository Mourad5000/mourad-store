import axios from "axios";
// import { GET_ALL_ITEMS } from "./homeActionTypes";

// exportar esta funcion
export function getAllItems() {
  return async () => {
    try {
      const endPoint = "https://fakestoreapi.com/products";
      const { data } = await axios.get(endPoint);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
}

export function useless() {
  return 1;
}
