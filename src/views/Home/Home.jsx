import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import Loading from "../../components/Loading/Loading";
import HomeProducts from "./HomeProducts/HomeProducts";

// actiontypes
import { getAllItems } from "../../redux/actions/homeActions/homeActions";

function Home() {
  const dispatch = useDispatch();
  const { items, loadingItems } = useSelector(({ homeReducer }) => homeReducer);

  useEffect(() => {
    if (!items) {
      dispatch(getAllItems());
    }
  }, [items]);
  return (
    <section>
      {
        loadingItems ? (
          <Loading text="
          Loading our products. The wait is worth it :) "
          />
        ) : (
          <HomeProducts />
        )
      }
    </section>
  );
}

export default Home;
