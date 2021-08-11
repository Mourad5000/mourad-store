import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// constants
import errorMesages from "../../constants/errorMesages";

// components
import Loading from "../../components/Loading/Loading";
import LoadingError from "../../components/LoadingError/LoadingError";
import HomeProducts from "./HomeProducts/HomeProducts";

// actiontypes
import { getAllItems, getOneItem } from "../../redux/actions/HomeActions/homeActions";

function Home() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { items, loadingItems, itemsError } = useSelector(({ homeReducer }) => homeReducer);

  useEffect(() => {
    if (!items) {
      dispatch(getAllItems());
    }
    // TODO: aqui despintar itemDetail
  }, [items]);

  function handleClick(id) {
    dispatch(getOneItem(id));
    history.push(`/productDetail/${id}`);
  }
  return (
    <>
      {
        loadingItems ? (
          <Loading text="
          Loading our products. The wait is worth it :) "
          />
        ) : (
          <>
            {itemsError && (<LoadingError text={errorMesages.GET_ALL_ITEMS_ERROR} />)}
            {items && (<HomeProducts handleClick={handleClick} />)}
          </>
        )
      }
    </>
  );
}

export default Home;
