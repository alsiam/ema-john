import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './header.css';


const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav>
                <ul>
                    <li><NavLink to="/shop">Shop</NavLink></li>
                    <li><NavLink to="/orders">Orders Review</NavLink></li>
                    <li><NavLink to="/inventory">Manage Inventory</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;