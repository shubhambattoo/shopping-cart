export const SET_PRODUCT = 'SET_PRODUCT';

export default (state, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return { ...state, cart: [...state.cart, action.payload] };
    default:
      return state;
  }
};
