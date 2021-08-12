/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

// constants
import errorMesages from "../../constants/errorMesages";

import "./ProductDetail.scss";

// components
import Loading from "../../components/Loading/Loading";
import LoadingError from "../../components/LoadingError/LoadingError";
import Button from "../../components/Button/Button";

// action creators
import { getAllItems } from "../../redux/actions/HomeActions/homeActions";
import { getOneItem } from "../../redux/actions/ProductActions/productActions";
import { addToCart } from "../../redux/actions/CartActions/cartActions";

function ProductDetail() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [infoCart, setInfoCart] = useState("");
  const { itemDetail, loadingItem, itemDetailError } = useSelector(
    ({ productReducer }) => productReducer,
  );
  const { cartItems } = useSelector(({ cartReducer }) => cartReducer);

  useEffect(() => {
    if (!itemDetail) {
      dispatch(getAllItems());
      dispatch(getOneItem(id));
    }
  }, [itemDetail]);

  function handleBackClick() {
    history.push("/home");
  }

  function handleAddToCart() {
    const found = cartItems.find((item) => item.id === itemDetail.id);
    if (found) {
      setInfoCart("This product is already in the cart, click to see it");
    } else {
      dispatch(addToCart(itemDetail));
      setInfoCart("Product added to cart, click to see it.");
    }
  }

  return (
    <>
      {loadingItem ? (
        <Loading
          text="
          Loading our products. The wait is worth it :) "
        />
      ) : (
        <>
          {itemDetail && (
            <div className="detail-container">
              <h1 className="detail__title">{itemDetail.title}</h1>
              <img className="detail__img" src={itemDetail.image} alt="Item" />
              <p className="detail__text">
                <span className="detail__text highlight">Price: </span>
                {itemDetail.price}
                {" "}
                €
              </p>
              <p className="detail__text">
                <span className="detail__text highlight">Category: </span>
                {itemDetail.category}
              </p>
              <p className="detail__text">
                <span className="detail__text highlight">Desctiption: </span>
                {itemDetail.description}
              </p>
              <div className="detail__buttons">
                <div className="buttons__button">
                  <Button text="Add to card" onClick={handleAddToCart} />
                </div>
                <div className="buttons__button">
                  <Button
                    text="Go back"
                    isSecondary
                    onClick={handleBackClick}
                  />
                </div>
              </div>

              <p
                className="detail__info"
                onClick={() => history.push("/myCart")}
              >
                {infoCart}
              </p>
            </div>
          )}
          {itemDetailError && (
            <LoadingError text={errorMesages.GET_ONE_ITEM_ERROR} />
          )}
        </>
      )}
    </>
  );
}

export default ProductDetail;
