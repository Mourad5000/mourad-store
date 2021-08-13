// history.replace
// pintar un carrito amb el numero de coses al header
import React from "react";
import { useHistory } from "react-router-dom";

import "./PageNotFound.scss";

import notFoundImg from "../../assets/images/404-image.png";

import Button from "../../components/Button/Button";

function PageNotFound() {
  const history = useHistory();

  function handleHomeClick() {
    history.replace("/");
  }

  return (
    <div className="not-found-container">
      <img className="not-gound__img" src={notFoundImg} alt="not Found icon" />
      <div className="not-bound__button">
        <Button text="Return to home" isSecondary onClick={handleHomeClick} />
      </div>
    </div>
  );
}

export default PageNotFound;
