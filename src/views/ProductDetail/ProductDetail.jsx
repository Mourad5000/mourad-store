import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

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
    }
  }, [itemDetail]);
  return (
    <>
      {
        itemDetail && (
        <div className="detail-container">
          <h1>{itemDetail.title}</h1>
          <h2>{id}</h2>
        </div>

        )
    }
    </>
  );
}

export default ProductDetail;
