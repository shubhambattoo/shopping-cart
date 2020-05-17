import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

const CartProduct = ({ cartItem }) => {
  const { removeProduct } = useContext(CartContext);
  const [qty, setQty] = useState(0);

  useEffect(() => {
    if (cartItem) {
      setQty(cartItem.qty);
    }
  }, [cartItem]);

  function handleRemoveProduct(id) {
    removeProduct(id);
  }

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
        <button
          className="button is-danger"
          onClick={() => handleRemoveProduct(cartItem.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

CartProduct.propTypes = {
  id: PropTypes.string,
  allCost: PropTypes.number,
  date: PropTypes.number,
  qty: PropTypes.number,
  product: PropTypes.shape({
    image: PropTypes.string,
    created: PropTypes.number,
    currency: PropTypes.object,
    sizes: PropTypes.array,
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    _id: PropTypes.string,
  }),
};

export default CartProduct;
