import React from "react";
import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Home", route: "/home" },
  { name: "Cart", route: "/cart" },
  { name: "Sales", route: "/sales" },
];

function Header() {
  return (
    <header>
      {menuItems.map((menuItem) => (
        <div key={menuItem.name}>
          <NavLink to={menuItem.route} key={menuItem.name}>
            {menuItem.name}
          </NavLink>
        </div>
      ))}
    </header>
  );
}

export default Header;
