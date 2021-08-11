/* eslint-disable react/prop-types */
import React from "react";

import "./AppWrapper.scss";

function AppWrapper({ children }) {
  return (
    <div className="app-wrapper-container">
      <div className="app-wrapper">
        {children}
      </div>
    </div>
  );
}

export default AppWrapper;
