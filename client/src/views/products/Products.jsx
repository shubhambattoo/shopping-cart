import React, { useEffect, useState, useCallback } from 'react';
import './Products.css';
import { Sizes } from '../../components/sizes/Sizes';
import { request } from '../../utils/fetch';
import { Product } from '../../components/product/Product';
import Select from '../../components/select/Select';

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState('created');
  const [sortVal, setsortVal] = useState('0');

  const selectOptions = [
    { text: 'Order By', value: 0 },
    { text: 'Highest to Lowest Price', value: 1 },
    { text: 'Lowest to Highest Price', value: 2 },
  ];

  useEffect(() => {
    const url = `products?sort=${sortBy}`;
    getProducts(url, setProducts);
  }, [sortBy]);

  function sortProducts(e) {
    const value = e.target.value;
    setsortVal(value);
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

  const handleProductsFilter = useCallback(
    (selectedSizes) => {
      const url = selectedSizes.length
        ? `products?sort=${sortBy}&sizes[in]=${selectedSizes.join(',')}`
        : `products?sort=${sortBy}`;

      getProducts(url, setProducts);
    },
    [sortBy]
  );

  return (
    <section className="container">
      {products.length > 0 && (
        <div className="columns">
          <div className="column is-three-quarters">
            <Sizes products={products} filterProducts={handleProductsFilter} />
          </div>
          <div
            className="column"
            style={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <Select options={selectOptions} value={sortVal} onChange={sortProducts} />
          </div>
        </div>
      )}
      <div className="products">
        <div className="columns is-multiline is-3 is-variable">
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
