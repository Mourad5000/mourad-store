import React, { useEffect } from "react";
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

function ProductDetail() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { itemDetail, loadingItem, itemDetailError } = useSelector(
    ({ productReducer }) => productReducer,
  );

  useEffect(() => {
    if (!itemDetail) {
      dispatch(getAllItems());
      dispatch(getOneItem(id));
    }
  }, [itemDetail]);

  function handleBackClick() {
    history.push("/home");
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
                  <Button text="Add to card" />
                </div>
                <div className="buttons__button">
                  <Button text="Go back" isSecondary onClick={handleBackClick} />
                </div>
              </div>
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
