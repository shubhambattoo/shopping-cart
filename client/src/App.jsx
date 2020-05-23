import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CartProvider } from './context/cartContext';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
const Cart = lazy(() => import('./views/cart/Cart'));
const Products = lazy(() => import('./views/products/Products'));

function App() {
  return (
    <CartProvider>
      <Router>
        <>
          <Header />
          <Suspense fallback={<div>loading...</div>}>
            <Switch>
              <Route path="/cart" component={Cart} />
              <Route path="/" component={Products} />
              <Route path="*" component={Products} />
            </Switch>
          </Suspense>
          <Footer />
        </>
      </Router>
    </CartProvider>
  );
}

export default App;
