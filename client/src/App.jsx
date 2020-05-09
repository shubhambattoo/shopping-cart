import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Cart } from './views/cart/Cart';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Products } from './views/products/Products';
import { CartProvider } from './context/cartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <>
          <Header />
          <Switch>
            <Route path="/cart" component={Cart} />
            <Route path="/" component={Products} />
            <Route path="*" component={Products} />
          </Switch>
          <Footer />
        </>
      </Router>
    </CartProvider>
  );
}

export default App;
