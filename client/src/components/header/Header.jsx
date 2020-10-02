import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import style from './header.module.css';

const Header = () => {
  const { cartSize } = useContext(CartContext);

  return (
    <header className={style.header}>
      <div className={style.container}>
        <nav className={style.header_nav}>
          <div className={style.brand}>
            <NavLink className={style.text_logo} to="/">
              NIKERS
            </NavLink>
          </div>
          <NavLink to="/cart" className={style.cart}>
            {cartSize || <span className="material-icons">shopping_cart</span>}
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
