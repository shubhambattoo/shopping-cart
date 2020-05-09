import React from 'react';
import Select from '../../components/select/Select';

const CartProduct = () => {
  const sizes = [
    { text: 'Sizes', value: '0' },
    { text: '10', value: '10' },
    { text: '11', value: '11' },
  ];
  const quantities = [
    { text: 'Quantities', value: '0' },
    { text: '1', value: '1' },
    { text: '2', value: '2' },
    { text: '3', value: '3' },
  ];
  return (
    <div className="cart-details">
      <div className="cart-product">
        <div className="cart-product__content">
          <div className="cart-product__content__image">
            <img src="//via.placeholder.com/150" alt="shoe" />
          </div>
          <div className="cart-product__content__text">
            <div className="cart-product__content__title">Nike Jordans One</div>
            <div className="cart-product__content__meta">Sold By: Nik</div>
            <div className="cart-product__content__filter">
              <div className="filter select">
                <Select options={sizes} value={0} />
              </div>
              <div className="filter select">
                <Select options={quantities} value={0} />
              </div>
            </div>
          </div>
          <div className="cart-product__content__price">Rs. 14995.00</div>
        </div>
        <div className="cart-product__footer">
          <button className="button is-danger">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
