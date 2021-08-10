import React from "react";
import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Register", route: "/santander" },
  { name: "Prizes", route: "/prizes" },
  { name: "Terms & conditions", route: "/terms" },
  { name: "Login", route: "/login" },
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
