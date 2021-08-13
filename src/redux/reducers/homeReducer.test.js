import homeReducer from "./homeReducer";
import homeActionTypes from "../actions/HomeActions/homeActionTypes";

describe("Given a homeReducer function", () => {
  const initialState = {};
  describe("When is called with no state and no action", () => {
    test("Then should return {}", () => {
      const newState = homeReducer(undefined, undefined);
      expect(newState).toEqual({});
    });
  });

  describe("When is called with GET_ITEMS_LOADING action type", () => {
    test("Then should add set loadingItems to true", () => {
      const action = {
        type: homeActionTypes.GET_ITEMS_LOADING,
      };
      const newState = homeReducer(initialState, action);

      expect(newState).toEqual({ loadingItems: true });
    });
  });

  describe("When is called with GET_ALL_ITEMS action type", () => {
    test("Then should add items property to state and loadingItems to false", () => {
      const itemsMock = [{ title: "jacket" }, { title: "fridge" }];
      const action = {
        type: homeActionTypes.GET_ALL_ITEMS,
        items: itemsMock,
      };
      const newState = homeReducer(initialState, action);

      expect(newState).toEqual({ items: itemsMock, loadingItems: false });
    });
  });

  describe("When is called with GET_ALL_ITEMS_ERROR action type", () => {
    test("Then should add itemsError property to state and loadingItems to false", () => {
      const action = {
        type: homeActionTypes.GET_ALL_ITEMS_ERROR,
        itemsError: "Request failed with status code 404",
      };
      const newState = homeReducer(initialState, action);

      expect(newState).toEqual({ itemsError: "Request failed with status code 404", loadingItems: false });
    });
  });
});
