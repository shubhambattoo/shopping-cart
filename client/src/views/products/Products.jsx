import React, { useEffect, useState } from 'react';
import './Products.css';
import { Sizes } from '../../components/sizes/Sizes';
import { request } from '../../utils/fetch';
import { Product } from '../../components/product/Product';
import { Sort } from '../../components/sort/Sort';

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [paginateVals, setPaginateVals] = useState({
    page: 1,
    limit: 6,
  });

  useEffect(() => {
    const url = `products?page=${paginateVals.page}&limit=${paginateVals.limit}`;
    request(url)
      .then((res) => {
        setProducts((p) => [...p, ...res.data.products]);
      })
      .catch((err) => {
        setProducts([]);
      });
  }, [paginateVals]);

  function showMoreData() {
    const page = paginateVals.page + 1;
    setPaginateVals({ page, limit: paginateVals.limit });
  }

  return (
    <section className="container">
      <div className="columns">
        <div className="column is-three-quarters">
          <Sizes />
        </div>
        <div className="column">
          <Sort />
        </div>
      </div>
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
      {products.length !== 12 && (
        <div style={{ margin: '15px 0 35px' }} onClick={showMoreData}>
          <button className="button is-text">Show More</button>
        </div>
      )}
    </section>
  );
};
