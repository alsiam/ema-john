import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data)
            });
    }, [])

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    }, [products])

    const addToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
        addToDb(product.key);
    }
    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedPrdoducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayProducts(matchedPrdoducts);

    }
    return (
        <>
            <div className="search-box">
                <input type="text" onChange={handleSearch} placeholder="Search Product Here.." />
            </div>
            <div className="shop-box">
                <div className="product-section">
                    <h1>Products: {products.length}</h1>
                    {
                        displayProducts.map(product => <Product key={product.key} product={product} addToCart={addToCart}></Product>)
                    }
                </div>
                <div className="cart-section">
                    <Cart cart={cart}>
                        <Link to="/orders">
                            <button>Review Item</button>
                        </Link>
                    </Cart>
                </div>
            </div>

        </>
    );
};

export default Shop;