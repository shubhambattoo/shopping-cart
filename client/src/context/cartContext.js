import React, { createContext, useReducer } from 'react';
import cartReducer, { SET_PRODUCT, REMOVE_PRODUCT } from './cartReducer';

const initialState = {
  cart: [],
  cartSize: 0,
  totalCost: 0,
};

export const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Actions
  function setProduct(product) {
    dispatch({ type: SET_PRODUCT, payload: product });
  }

  function removeProduct(id) {
    dispatch({ type: REMOVE_PRODUCT, payload: id });
  }

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        cartSize: state.cartSize,
        totalCost: state.totalCost,
        setProduct,
        removeProduct
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
