import React from "react";
import { useSelector } from "react-redux";

function HomeProducts() {
  const { items } = useSelector(({ homeReducer }) => homeReducer);
  return (
    <div className="products-container">
      <div className="products__relevant" />
      {items.map((item) => (
        <div className="products__item">
          <p className="item__name">{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default HomeProducts;
