/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import configureStore from "../redux/store/configureStore";

export default function testWrapperFactory(component, initialState = {}) {
  return render(
    <>
      <Provider store={configureStore(initialState)}>
        <BrowserRouter>
          {component}
        </BrowserRouter>
      </Provider>
    </>,
  );
}
