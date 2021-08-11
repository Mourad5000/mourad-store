import React from "react";
import { useSelector } from "react-redux";

import "./HomeProducts.scss";

import Button from "../../../components/Button/Button";

function HomeProducts() {
  const { items } = useSelector(({ homeReducer }) => homeReducer);
  return (
    <>
      {
          items && (
          <div className="products-container">
            <div className="products__relevant">
              <div className="relevant__texts">
                <h1 className="texts__title">{items[0].title}</h1>
                <h3 className="texts__description">{items[0].description}</h3>
                <div className="texts__button">
                  <Button text="Buy now" />
                </div>
              </div>
              <div className="relevant__img">
                <img className="img__cover-page" src={items[0].image} alt="Product" />
              </div>
            </div>
            {items?.map((item) => (
              <div className="products__item">
                <p className="item__name">{item.title}</p>
              </div>
            ))}
          </div>
          )
      }
    </>

  );
}

export default HomeProducts;
