import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./Navbar.css";
import { navItems } from "./NavItems";
import Dropdown from "./Dropdown";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          NATURE
          <Icons.FaTree />
        </Link>
        <ul className="nav-items">
          {navItems.map((item) => {
            return (
              <li
                key={item.id}
                className={item.cName}
                onMouseEnter={() =>
                  item.dropDown?.length > 0 && setDropdown(true)
                }
                onMouseLeave={() =>
                  item.dropDown?.length > 0 && setDropdown(false)
                }
              >
                <Link to={item.path}>{item.title}</Link>
                {item.dropDown?.length > 0 && dropdown && (
                  <Dropdown dropDown={item.dropDown} />
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
