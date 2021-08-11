import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// actiontypes
import { getAllItems } from "../redux/actions/homeActions/homeActions";

function Home() {
  const dispatch = useDispatch();
  const { items } = useSelector(({ homeReducer }) => homeReducer);

  useEffect(() => {
    if (!items) {
      dispatch(getAllItems());
    }
  }, [items]);
  return (
    <section>
      <p>hola</p>
    </section>
  );
}

export default Home;
