import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllItems } from "../redux/actions/HomeActions/homeActions";

function Home() {
  const dispatch = useDispatch();
  const { items } = useSelector(({ mainReducer }) => mainReducer);

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
