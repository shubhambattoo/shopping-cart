import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Cart } from './views/cart/Cart';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Products } from './views/products/Products';

function App() {
  return (
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
  );
}

export default App;
