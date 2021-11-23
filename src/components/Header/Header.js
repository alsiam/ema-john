import React from "react";
import { NavLink } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import logo from "../../images/logo.png";
import "./header.css";

const Header = () => {
  const { user, logout } = useFirebase();
  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav>
        <ul>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/orders">Orders Review</NavLink>
          </li>
          <li>
            <NavLink to="/inventory">Manage Inventory</NavLink>
          </li>
          {!user.displayName ? (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          ) : (
            <li onClick={logout}>Logout</li>
          )}

          <p>{user.displayName}</p>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
