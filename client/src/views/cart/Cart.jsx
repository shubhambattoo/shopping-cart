import React, { useContext, useLayoutEffect } from 'react';
import './Cart.css';
import CartProduct from '../../components/cartProduct/CartProduct';
import { CartContext } from '../../context/cartContext';

const Cart = () => {
  const { cart, totalCost } = useContext(CartContext);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="content" style={{ marginTop: '75px' }}>
        <h4>My Shopping Bag</h4>
      </div>
      <div className="columns">
        <div className="column is-9">
          <div className="cart-details">
            {cart.map((cartItem) => (
              <CartProduct cartItem={cartItem} key={cartItem.id} />
            ))}
          </div>
        </div>
        <div className="column">
          <div className="card total-box">
            <div className="card-header">
              <div className="card-header-title">Price Details</div>
            </div>
            <div className="card-content">
              <div className="item">
                <div className="text">Bag Total</div>
                <div className="price">{totalCost.toFixed(2)}</div>
              </div>
              <div className="item">
                <div className="text">Shipping</div>
                <div className="price">0.00</div>
              </div>
              <div className="item total">
                <div className="text">Total</div>
                <div className="price">{totalCost.toFixed(2)}</div>
              </div>
            </div>
            <div className="card-footer">
              <div className="card-footer-item">
                <button className="button is-success" disabled={!cart.length}>
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
