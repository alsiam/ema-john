import React from 'react';
import { useNavigate  } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/UseProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  const history = useNavigate ();
  const handleRemove = key => {
    const newCart = cart.filter(product => product.key !== key);
    setCart(newCart);
    removeFromDb(key);
  }
  const handlePlaceOrder = () => {
    history.push("/orderplaced");
    setCart([]);
    clearTheCart()
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
          <button onClick={handlePlaceOrder}>Place Order</button>
        </Cart>
      </div>

    </div>
  );
};

export default OrderReview;