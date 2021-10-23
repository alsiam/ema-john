import React from 'react';

const ReviewItem = (props) => {
    const { name, price, quantity,key } = props.product;
    const { handleRemove } = props;
    return (
        <div className="">
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <h3>Quantity: {quantity}</h3>
            <button onClick={()=>handleRemove(key)} className="btn">Remove</button>
        </div>
    );
};

export default ReviewItem;