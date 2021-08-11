import React from "react";
import PropTypes from "prop-types";

import "./Button.scss";

function Button({ isSecondary, onClick, text }) {
  function buttonStyle() {
    return `primary-button ${isSecondary && "is-secondary"}`;
  }

  return (
    <button
      type="button"
      className={buttonStyle()}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isSecondary: PropTypes.bool,
};

Button.defaultProps = {
  onClick: () => {},
  isSecondary: false,
};

export default Button;
