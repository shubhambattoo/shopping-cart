import React, { useEffect, useState } from 'react';
import './Products.css';
import { Sizes } from '../../components/sizes/Sizes';
import { request } from '../../utils/fetch';
import { Product } from '../../components/product/Product';
import { Sort } from '../../components/sort/Sort';

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `products`;
    request(url)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        setProducts([]);
      });
  }, []);

  return (
    <section className="container">
      {products.length && (
        <div className="columns">
          <div className="column is-three-quarters">
            <Sizes products={products} />
          </div>
          <div
            className="column"
            style={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <Sort />
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
