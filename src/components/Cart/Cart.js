import React from 'react';
import './cart.css';

const Cart = (props) => {

    const { cart } = props;

    // const total = cart.reduce((previous, product) => previous + product.price, 0);

    // let totalQuantity = cart.reduce((previous, quantity) => previous + !cart.quantity ? 1 : cart.quantity, 0)


    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        product.quantity = !product.quantity ? 1 : product.quantity;
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = 0;
    const tax = (total + shipping) / 10;
    const gradTotal = total + shipping + tax;

    return (
        <div className="cart-box">
            <h2>Order Summary</h2>
            <p>Items ordered:{totalQuantity} </p>
            <p>Total {total.toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Grand Total: {gradTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;