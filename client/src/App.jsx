import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/cartContext';
import Header from './components/header/Header';
import { Loader } from './components/loader/Loader';

const Cart = lazy(() => import('./views/cart/Cart'));
const Home = lazy(() => import('./views/homepage/Home'));
const ViewProduct = lazy(() => import('./views/product/ViewProduct'));

function App() {
  return (
    <CartProvider>
      <Router>
        <>
          <Header />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/product/:id" element={<ViewProduct />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </>
      </Router>
    </CartProvider>
  );
}

export default App;
