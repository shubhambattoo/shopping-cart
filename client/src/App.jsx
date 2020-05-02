import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './views/home/Home';
import { Cart } from './views/cart/Cart';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/cart" component={Cart} />
          <Route path="/" component={Home} />
          <Route path="*" component={Home} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
