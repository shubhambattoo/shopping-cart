import React from 'react';
import './Cart.css';
import CartProduct from '../../components/cartProduct/CartProduct';

export const Cart = () => {
  return (
    <div className="container">
      <div className="content" style={{ marginTop: '75px' }}>
        <h4>My Shopping Bag</h4>
      </div>
      <div className="columns">
        <div className="column is-9">
          <CartProduct />
        </div>
        <div className="column">
          <div className="card total-box">
            <div className="card-header">
              <div className="card-header-title">Price Details</div>
            </div>
            <div className="card-content">
              <div className="item">
                <div className="text">Bag Total</div>
                <div className="price">14995.00</div>
              </div>
              <div className="item">
                <div className="text">Shipping</div>
                <div className="price">0.00</div>
              </div>
                <div className="item total">
                  <div className="text">Total</div>
                  <div className="price">14995.00</div>
                </div>
            </div>
            <div className="card-footer">
              <div className="card-footer-item">
                <button className="button is-success">Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
