import React from "react";
import PropTypes from "prop-types";

import loadingErrorIcon from "../../assets/images/loading-error-icon.svg";

function LoadingError({ text }) {
  return (
    <div className="loading-error">
      <img className="loading-error__img" src={loadingErrorIcon} alt="Loading icon error" />
      <p className="loading-error__text">{text}</p>
    </div>
  );
}

LoadingError.propTypes = {
  text: PropTypes.string.isRequired,
};

export default LoadingError;
