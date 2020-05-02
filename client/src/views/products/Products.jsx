import React, { useEffect, useState } from 'react';
import './Products.css';
import { Sizes } from '../../components/sizes/Sizes';

export const Products = () => {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {});

  return (
    <section className="container">
      <Sizes />
      <div className="products">
        <div class="columns">
          <div class="column is-one-third">
            <div className="card product">
              <div className="card-image">
                <figure className="image">
                  <img
                    src="https://bulma.io/images/placeholders/1280x960.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <header className="card-header">
                <p className="card-header-title">Air Jordan 1</p>
              </header>
              <div className="card-content">
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris.
                </div>
              </div>
              <footer className="card-footer">
                <button className="card-footer-item button is-text">
                  Add To Cart
                </button>
              </footer>
            </div>
          </div>
          <div class="column is-one-third">is-one-third</div>
          <div class="column is-one-third">is-one-third</div>
        </div>
      </div>
    </section>
  );
};
