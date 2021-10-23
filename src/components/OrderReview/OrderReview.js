import React from 'react';
import { Link } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/UseProducts';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  const handleRemove = key => {
    const newCart = cart.filter(product => product.key !== key);
    setCart(newCart);
    removeFromDb(key);
  }
  return (
    <div className="product">
      <div className="product-box">
        {
          cart.map(product => <ReviewItem
            key={product.key}
            product={product}
            handleRemove={handleRemove}></ReviewItem>)
        }

      </div>
      <div className="cart-box">
        <Cart cart={cart}>
          <Link to="/orders">
            <button>Review Item</button>
          </Link>
        </Cart>
      </div>

    </div>
  );
};

export default OrderReview;