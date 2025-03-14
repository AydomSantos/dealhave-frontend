import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsCart } from 'react-icons/bs';
import './CartIcon.css';

const CartIcon = () => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <Link to="/cart" className="cart-icon">
      <div className="cart-icon__container">
        <BsCart className="cart-icon__icon" />
        {cartQuantity > 0 && (
          <span className="cart-icon__badge">{cartQuantity}</span>
        )}
      </div>
    </Link>
  );
};

export default CartIcon;