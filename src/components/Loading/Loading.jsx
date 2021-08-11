import React from "react";

import "./Loading.scss";

import loader from "../../assets/images/loader.gif";

function Loading(text) {
  return (
    <div className="loader">
      <img className="loader__spinner" src={loader} alt="Loader GIF" />
      <p className="loader__text">{text}</p>
    </div>
  );
}

export default Loading;
