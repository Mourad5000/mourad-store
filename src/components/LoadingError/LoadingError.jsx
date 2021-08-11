import React from "react";
import PropTypes from "prop-types";

import loadingErrorIcon from "../../assets/images/loading-error-icon.svg";

function LoadingError({ text }) {
  return (
    <div className="loading-error">
      <img src={loadingErrorIcon} alt="Loading icon error" />
      <p>{text}</p>
    </div>
  );
}

LoadingError.propTypes = {
  text: PropTypes.string.isRequired,
};

export default LoadingError;
