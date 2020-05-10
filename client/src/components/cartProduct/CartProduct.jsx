import React, { useState, useEffect } from 'react';

const CartProduct = ({ cartItem }) => {
  const [qty, setQty] = useState(0);

  useEffect(() => {
    if (cartItem) {
      setQty(cartItem.qty);
    }
  }, [cartItem]);

  return (
    <div className="cart-product">
      <div className="cart-product__content">
        <div className="cart-product__content__image">
          <img src={cartItem.product.image} alt={cartItem.product.name} />
        </div>
        <div className="cart-product__content__text">
          <div className="cart-product__content__title">
            {cartItem.product.name}
          </div>
          <div className="cart-product__content__meta">Sold By: Nik</div>
          <div className="cart-product__content__filter">
            <div className="text">Qty</div>
            <div className="filter">
              <i className="material-icons">add</i>
              <span>{qty}</span>
              <i className="material-icons">remove</i>
            </div>
          </div>
        </div>
        <div className="cart-product__content__price">
          {cartItem.product.currency.format} {cartItem.allCost.toFixed(2)}
        </div>
      </div>
      <div className="cart-product__footer">
        <button className="button is-danger">Remove</button>
      </div>
    </div>
  );
};

export default CartProduct;
