import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.scss";

import logo from "../../assets/images/logo.png";
// import cover from "../../assets/images/header-cover-image.jpg";

const menuItems = [
  { name: "Home", route: "/home" },
  { name: "Cart", route: "/cart" },
  { name: "Sales", route: "/sales" },
];

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header__list">
          {menuItems.map((menuItem) => (
            <NavLink
              to={menuItem.route}
              key={menuItem.name}
              className="list__item"
              activeClassName="list__item--active"
            >
              {menuItem.name}
            </NavLink>
          ))}
        </div>
        <img className="header__logo" src={logo} alt="Atlas logo" />
      </div>
      <div className="header-cover">
        <h1 className="header-cover__title">Atlas shop</h1>
      </div>
    </header>
  );
}

export default Header;
