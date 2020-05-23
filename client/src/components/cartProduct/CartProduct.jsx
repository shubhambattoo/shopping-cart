import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

const CartProduct = ({ cartItem }) => {
  const { removeProduct, qtyUpdate } = useContext(CartContext);
  const [qty, setQty] = useState(0);

  useEffect(() => {
    if (cartItem) {
      setQty(cartItem.qty);
    }
  }, [cartItem]);

  function handleRemoveProduct() {
    removeProduct(cartItem.id);
  }

  function increment() {
    setQty(qty + 1);
    qtyUpdate({ ...cartItem, qty: qty + 1 });
  }

  function decrement() {
    if (qty === 1) return false;
    setQty(qty - 1);
    qtyUpdate({ ...cartItem, qty: qty - 1 });
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
          <div className="cart-product__content__meta">Sold By: Nikes</div>
          <div className="cart-product__content__filter">
            <div className="text">Quantity</div>
            <div className="filter">
              <i
                className={
                  qty === 1 ? 'material-icons disabled' : 'material-icons'
                }
                onClick={decrement}
              >
                remove
              </i>
              <span>{qty}</span>
              <i className="material-icons" onClick={increment}>
                add
              </i>
            </div>
          </div>
        </div>
        <div className="cart-product__content__price">
          {cartItem.product.currency.format} {cartItem.allCost.toFixed(2)}
        </div>
      </div>
      <div className="cart-product__footer">
        <button className="button is-danger" onClick={handleRemoveProduct}>
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
