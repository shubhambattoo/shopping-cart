import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

const Header = () => {
  const { cartSize } = useContext(CartContext);
  const [showMenu, setShowMenu] = useState(false);

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <header>
      <nav
        className="navbar is-light is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="32px"
              height="32px"
              viewBox="0 0 32 32"
              enableBackground="new 0 0 32 32"
            >
              <g>
                <polygon
                  fill="#8BC72A"
                  points="7.349,5.001 10.417,18.048 24.164,16.027 25.738,5.001 	"
                />
              </g>
              <g>
                <g>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#413A4D"
                    d="M23.508,24.996c-0.829,0-1.502,0.673-1.502,1.502
			c0,0.83,0.673,1.502,1.502,1.502c0.83,0,1.502-0.672,1.502-1.502C25.01,25.669,24.338,24.996,23.508,24.996z M8.508,24.996
			c-0.829,0-1.502,0.673-1.502,1.502c0,0.83,0.673,1.502,1.502,1.502c0.83,0,1.502-0.672,1.502-1.502
			C10.01,25.669,9.338,24.996,8.508,24.996z M27.771,7.346c-0.19-0.22-0.466-0.345-0.756-0.345H6.114L5.59,4.772
			C5.482,4.32,5.08,4.001,4.615,4.001H2v1h2.615l3.637,15.454L7.25,22.554c-0.155,0.31-0.139,0.678,0.043,0.973
			c0.183,0.295,0.509,0.475,0.855,0.475h16.859v-1H8.145l0.868-1.818l16.759-2.464c0.438-0.064,0.781-0.409,0.844-0.849l1.39-9.729
			C28.047,7.855,27.961,7.564,27.771,7.346z M25.61,17.729L9.205,20.142L6.349,8.001H27L25.61,17.729z M21.854,9.858l-0.708-0.707
			l-5.656,5.656l-2.121-2.121l-0.707,0.707l2.828,2.828L21.854,9.858z"
                  />
                </g>
              </g>
            </svg>
            &nbsp; Sneakers Heads
          </Link>
          <div
            role="button"
            className={showMenu ? 'navbar-burger is-active' : 'navbar-burger'}
            aria-label="menu"
            aria-expanded="false"
            onClick={handleShowMenu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>

        <div className={showMenu ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-end">
            <Link className="navbar-item" to="/">
              <i className="material-icons">home</i>
              Home
            </Link>
            <Link className="navbar-item" to="/cart">
              <i className="material-icons">shopping_cart</i>
              Cart ({cartSize})
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
