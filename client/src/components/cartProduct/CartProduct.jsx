import React from 'react';
import Select from '../../components/select/Select';

const CartProduct = ({ cartItem }) => {
  const quantities = [
    { text: 'Quantities', value: '0' },
    { text: '1', value: '1' },
    { text: '2', value: '2' },
    { text: '3', value: '3' },
  ];

  function mapToSizes(arr) {
    const mapped = arr.map((el) => ({ text: el, value: el }));
    return [{ text: 'Sizes', value: '0' }, ...mapped];
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
            <div className="filter select">
              <Select options={mapToSizes(cartItem.product.sizes)} value={0} />
            </div>
            <div className="filter select">
              <Select options={quantities} value={0} />
            </div>
          </div>
        </div>
        <div className="cart-product__content__price">
          {cartItem.product.currency.format} {cartItem.product.price.toFixed(2)}
        </div>
      </div>
      <div className="cart-product__footer">
        <button className="button is-danger">Remove</button>
      </div>
    </div>
  );
};

export default CartProduct;
