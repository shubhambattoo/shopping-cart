import React from 'react';

export const Product = ({ product }) => {
  return (
    <div className="column is-4" key={product._id}>
      <div className="card product">
        <div className="card-image">
          <figure className="image">
            <img
              src={product.image}
              alt={product.name}
            />
          </figure>
        </div>
        <header className="card-header">
          <p className="card-header-title">{product.name}</p>
          <div className="price">
            {product.currency.format} {product.price.toFixed(2)}
          </div>
        </header>
        {product.description && (
          <div className="card-content">
            <div className="content">{product.description}</div>
          </div>
        )}
        <footer className="card-footer">
          <button className="card-footer-item button is-text">
            Add To Cart
          </button>
        </footer>
      </div>
    </div>
  );
};
