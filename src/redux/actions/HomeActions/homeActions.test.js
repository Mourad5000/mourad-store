import axios from "axios";
import homeActionTypes from "./homeActionTypes";
import {
  getItemsLoading, getAllItemsSucess, getAllItemsError, getAllItems,
} from "./homeActions";

jest.mock("axios");

let expected = { type: null };
describe("Given a getItemsLoading action creator", () => {
  describe("When is called", () => {
    test("Then should return an action of type GET_ITEMS_LOADING", () => {
      expected = { type: homeActionTypes.GET_ITEMS_LOADING };
      expect(getItemsLoading()).toEqual(expected);
    });
  });
});

describe("Given a getAllItemsSucess action creator", () => {
  describe("When is called with undefined items", () => {
    test("Then should return an action of type GET_ALL_ITEMS and undefined value in items", () => {
      expected = { type: homeActionTypes.GET_ALL_ITEMS, items: undefined };
      expect(getAllItemsSucess(undefined)).toEqual(expected);
    });
  });

  describe("When is called with the items", () => {
    test("Then should return an action of type GET_ALL_ITEMS and the recieved items object", () => {
      const itemsMock = [{ title: "jacket" }, { title: "fridge" }];

      expected = { type: homeActionTypes.GET_ALL_ITEMS, items: itemsMock };
      expect(getAllItemsSucess(itemsMock)).toEqual(expected);
    });
  });
});

describe("Given a getAllItemsError action creator", () => {
  describe("When is called with an error", () => {
    test("Then should return an action of type GET_ALL_ITEMS_ERROR and the error message", () => {
      expected = { type: homeActionTypes.GET_ALL_ITEMS_ERROR, itemsError: "some error msg" };

      expect(getAllItemsError("some error msg")).toEqual(expected);
    });
  });
});

describe("Given a getAllItems async action creator", () => {
  let dispatch;

  beforeEach(() => {
    dispatch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("When axios.get throws an error", () => {
    test("Then should call dispatch with getAllItemsError and the error", async () => {
      axios.get = jest.fn().mockReturnValue(Promise.reject(new Error("request items error")));
      await getAllItems()(dispatch);

      expect(dispatch.mock.calls[1][0].type).toBe("GET_ALL_ITEMS_ERROR");
    });
  });

  describe("When axios.get returns data", () => {
    test("Then shoul call dispatch with getAllItemsSucess and the items", async () => {
      const itemsMock = [{ title: "jacket" }, { title: "fridge" }];

      axios.get = jest.fn().mockReturnValue(Promise.resolve(itemsMock));
      await getAllItems()(dispatch);

      expect(dispatch.mock.calls[1][0].type).toBe("GET_ALL_ITEMS");
    });
  });
});
