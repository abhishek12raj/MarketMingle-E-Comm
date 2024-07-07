import React, { createContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  cart: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const item = action.payload;
      const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...item, quantity: 1 }],
        };
      }

    case 'INCREMENT_QUANTITY':
      return {
        ...state,
        cart: state.cart.map((cartItem) =>
          cartItem.id === action.payload
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ),
      };

    case 'DECREMENT_QUANTITY':
      return {
        ...state,
        cart: state.cart
          .map((cartItem) =>
            cartItem.id === action.payload && cartItem.quantity > 1
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          )
          .filter((cartItem) => cartItem.quantity > 0),
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
      };

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const total = state.cart.reduce((acc, item) => {
    const itemPrice = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
    return acc + itemPrice * item.quantity;
  }, 0);

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch, total }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
export default CartContext;
