import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// actiontypes
import { getAllItems } from "../redux/actions/homeActions/homeActions";

function Home() {
  const dispatch = useDispatch();
  const { items } = useSelector(({ mainReducer }) => mainReducer);
  console.log("hola");

  useEffect(() => {
    if (!items) {
      dispatch(getAllItems());
    }
  }, [items]);
  return (
    <section />
  );
}

export default Home;
