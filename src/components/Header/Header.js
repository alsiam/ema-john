import React from 'react';
import logo from '../../images/logo.png';
import './header.css';


const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav>
                <ul>
                    <li> <a href="/shop">Shop</a></li>
                    <li> <a href="/orders">Orders Review</a></li>
                    <li> <a href="/inventory">Manage Inventory</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;