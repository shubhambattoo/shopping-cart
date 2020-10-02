import React, {
  useContext,
  // useState
} from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import style from './header.module.css';

const Header = () => {
  const { cartSize } = useContext(CartContext);
  // const [showMenu, setShowMenu] = useState(false);

  // function handleShowMenu() {
  //   setShowMenu(!showMenu);
  // }

  return (
    <header className={style.header}>
      <div className={style.container}>
        <nav className={style.header_nav}>
          <div className={style.brand}>
            <NavLink className={style.text_logo} to="/">
              {/* <img className={style.logo} src={logo} alt="logo" />  */}
              NIKERS
            </NavLink>
          </div>
          <div className={style.cart}>
            <NavLink to="/cart">
              {cartSize || (
                <span className="material-icons">shopping_cart</span>
              )}
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
