import React, { useEffect, useState } from 'react';
import './Products.css';
import { Sizes } from '../../components/sizes/Sizes';
import { request } from '../../utils/fetch';
import { Product } from '../../components/product/Product';
import { Sort } from '../../components/sort/Sort';

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState('created');

  useEffect(() => {
    const url = `products?sort=${sortBy}`;
    getProducts(url, setProducts);
  }, [sortBy]);

  function sortProducts(value) {
    switch (value) {
      case '1':
        setSortBy('-price');
        break;
      case '2':
        setSortBy('price');
        break;
      case '0':
        setSortBy('created');
        break;
      default:
        break;
    }
  }

  function handleProductsFilter(selectedSizes) {
    return false;
  }

  return (
    <section className="container">
      {products.length && (
        <div className="columns">
          <div className="column is-three-quarters">
            <Sizes products={products} filterProducts={handleProductsFilter} />
          </div>
          <div
            className="column"
            style={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <Sort onSortChange={sortProducts} />
          </div>
        </div>
      )}
      <div className="products">
        <div className="columns is-multiline is-6 is-variable">
          {products && products.length > 0 ? (
            products.map((product) => (
              <Product product={product} key={product._id} />
            ))
          ) : (
            <div>No Records Found</div>
          )}
        </div>
      </div>
    </section>
  );
};

function getProducts(url, setProducts) {
  request(url)
    .then((res) => {
      setProducts(res.data.products);
    })
    .catch((err) => {
      setProducts([]);
    });
}
