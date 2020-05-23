import React, { useEffect, useState, useCallback } from 'react';
import './Products.css';
import { Sizes } from '../../components/sizes/Sizes';
import { request } from '../../utils/fetch';
import { Product } from '../../components/product/Product';
import Select from '../../components/select/Select';
import { Loader } from '../../components/loader/Loader';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState('created');
  const [sortVal, setsortVal] = useState('0');
  const [isLoading, setIsLoading] = useState(true);

  const selectOptions = [
    { text: 'Order By', value: 0 },
    { text: 'Highest to Lowest Price', value: 1 },
    { text: 'Lowest to Highest Price', value: 2 },
  ];

  useEffect(() => {
    const url = `products?sort=${sortBy}`;
    getProducts(url, setProducts);
    setIsLoading(false);
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
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: 75,
            }}
          >
            <Select
              options={selectOptions}
              value={sortVal}
              onChange={sortProducts}
              classes={'is-rounded'}
            />
          </div>
        </div>
      )}
      <div className="products">
        <div style={{margin: '0 0 20px'}}>{products.length} product(s) found.</div>
        <div className="columns is-multiline is-3 is-variable">
          {products && products.length > 0 ? (
            products.map((product) => (
              <Product product={product} key={product._id} />
            ))
          ) : (
            <div>No Records Found</div>
          )}
        </div>
        {isLoading && <Loader />}
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

export default Products;
