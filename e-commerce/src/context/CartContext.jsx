import { createContext } from "react";

export default createContext({
  cart: [],
  cartOpen: false,
  addProductToCart: (product) => undefined,
  cleanCart: () => undefined,
  removeProductFromCart: (product) => undefined,
  toogleCartOpen: () => undefined,
});
