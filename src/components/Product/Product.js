import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import './product.css';



const Product = (props) => {
    const { name, img, seller, price, stock, star } = props.product;
    const icon = <FontAwesomeIcon icon={faShoppingCart} />;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3>{name}</h3>
                <p><small>by: {seller}</small></p>
                <p>only {stock} left in stock - order soon</p>
                <h3>$ {price}</h3>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly
                ></Rating>
                <br />
                <button onClick={() => props.addToCart(props.product)} className="btn-regular">{icon} Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;