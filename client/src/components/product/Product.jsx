import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import PropTypes from 'prop-types';

export const Product = ({ product }) => {
  const { setProduct } = useContext(CartContext);

  function addToCart() {
    const cartProduct = {
      qty: 1,
      product,
    };
    setProduct(cartProduct);
  }

  return (
    <div className="column is-3" key={product._id}>
      <div className="card product">
        <div className="card-image">
          <figure className="image">
            <img src={product.image} alt={product.name} />
          </figure>
        </div>
        <header className="card-header">
          <p className="card-header-title">{product.name}</p>
          <div className="price">
            {product.currency.format} {product.price.toFixed(2)}
          </div>
        </header>
        <footer className="card-footer">
          <button
            className="card-footer-item button is-text"
            onClick={addToCart}
          >
            Add To Cart
          </button>
        </footer>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    created: PropTypes.number,
    currency: PropTypes.object,
    sizes: PropTypes.array,
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};
