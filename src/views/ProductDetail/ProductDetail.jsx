import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import "./ProductDetail.scss";

// action creators
import { getAllItems, getOneItem } from "../../redux/actions/HomeActions/homeActions";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { itemDetail } = useSelector(({ homeReducer }) => homeReducer);

  useEffect(() => {
    if (!itemDetail) {
      dispatch(getAllItems());
      dispatch(getOneItem(id));
      console.log("entro aqui");
    }
  }, [itemDetail]);

  return (
    <>
      {
        itemDetail && (
        <div className="detail-container">
          <h1 className="detail__title">{itemDetail.title}</h1>
          <img className="detail__img" src={itemDetail.image} alt="Item" />
          <p className="detail__text">
            <span className="detail__text highlight">Desctiption:</span>
            {itemDetail.description}
          </p>
        </div>

        )
    }
    </>
  );
}

export default ProductDetail;
