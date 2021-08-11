import React from "react";
import PropTypes from "prop-types";

import "./Loading.scss";

import loader from "../../assets/images/loader.gif";

function Loading({ text }) {
  return (
    <div className="loader">
      <img className="loader__spinner" src={loader} alt="Loader GIF" />
      <p className="loader__text">{text}</p>
    </div>
  );
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Loading;
