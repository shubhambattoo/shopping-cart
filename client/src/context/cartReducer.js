import shortid from 'shortid';

export const SET_PRODUCT = 'SET_PRODUCT';

export default (state, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return setProduct(state, action.payload);
    default:
      return state;
  }
};

function setProduct(state, cartItem) {
  const item = state.cart.find((ci) => ci.product._id === cartItem.product._id);
  const index = state.cart.findIndex(
    (ci) => ci.product._id === cartItem.product._id
  );
  if (item) {
    const newItem = {
      ...item,
      qty: item.qty + 1,
    };
    newItem['allCost'] = item.product.price * newItem.qty;
    const cart = state.cart.filter((c, i) => i !== index);
    const newCart = [...cart, newItem].sort((a, b) => a.date - b.date);
    return {
      ...state,
      cart: newCart,
      cartSize: state.cartSize + 1,
    };
  }
  cartItem['allCost'] = cartItem.product.price;
  cartItem['id'] = shortid();
  cartItem['date'] = Date.now();
  return {
    ...state,
    cart: [...state.cart, cartItem],
    cartSize: state.cartSize + 1,
  };
}
