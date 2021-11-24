import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from "../../images/logo.png";
import "./header.css";

const Header = () => {
  const { user, logout } = useAuth();
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

          <span> {user.displayName}</span>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
