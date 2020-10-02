import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from '../products/products.module.css';

export const Product = ({ product }) => {
  const history = useHistory();
  const [colors] = useState(() =>
    product.images
      .map((img) => ({ name: img.color, code: img.hex }))
      .filter((v, i, a) => a.findIndex((t) => t.name === v.name) === i)
  );

  function showProductDetails(id) {
    history.push(
      `/product/${product.name.split(' ').join('-')}-${product._id}`
    );
  }

  function getItemKlass(custId) {
    let klass = 'prod';
    switch (custId) {
      case 1:
        klass += '';
        break;
      case 2:
        klass += ' men_item';
        break;
      case 3:
        klass += ' women_item';
        break;
      case 4:
        klass += ' unisex_item';
        break;
      case 5:
        klass += ' kid_item';
        break;
      default:
        klass = '';
        break;
    }
    return klass;
  }

  return (
    <div
      key={product._id}
      className={`${style.product_card} ${getItemKlass(product.customerType)}`}
      onClick={() => showProductDetails(product)}
    >
      <div className={style.card_image}>
        <img src={product.images[0].src} alt={product.name} />
      </div>
      <div className={style.card_status}>
        {product.status === 0 && (
          <span className={`${style.card_badge} ${style.soldout_badge}`}>
            Sold Out
          </span>
        )}
        {product.status === 1 && (
          <span className={`${style.card_badge} ${style.new_badge}`}>NEW</span>
        )}
        {product.status === 3 && (
          <span className={`${style.card_badge} ${style.upcoming_badge}`}>
            Coming Soon
          </span>
        )}
      </div>
      <div className={style.card_content}>
        <div className={style.card_info}>
          <h3>{product.name}</h3>
          <p>
            {' '}
            {product.currency.format} {product.price.toFixed(2)}
          </p>
        </div>
        <div className={style.card_meta}>
          <div className={style.card_colors}>
            {colors.map((c, i) => (
              <span
                key={i}
                title={c.name}
                style={{
                  backgroundColor: c.code,
                  border: `1px solid ${c.name === 'White' ? '#ccc' : c.code}`,
                }}
              ></span>
            ))}
          </div>
        </div>
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
