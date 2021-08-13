import React from "react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

// utils
import testWrapperFactory from "../../../utils/testUtils";

// components
import ProductCard from "./ProductCard";

describe("Given a ProductCard component", () => {
  const productMock = { title: "Jacket", price: 12 };
  test("Then should render", () => {
    const screen = testWrapperFactory(<ProductCard product={productMock} />);

    const titleElement = screen.getByText("Jacket");

    expect(titleElement).toBeInTheDocument();
  });

  describe("When user clicks the card", () => {
    test("Then should call handleClick function", () => {
      const mockFunction = jest.fn();
      const screen = testWrapperFactory(
        <ProductCard product={productMock} handleClick={mockFunction} />,
      );

      const cardElement = screen.getByRole("button");
      userEvent.click(cardElement);

      expect(mockFunction).toHaveBeenCalled();
    });
  });
});
