import { useState, useCallback, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import "./App.css";
import CartContext from "./context/CartContext";
import UserContext from "./context/UserContext";
import ProductsContext from "./context/ProductsContext";
import routes from "./defaults/routes";
import ToogleCarrinho from "./components/Cart";
import Login from "./screens/Login";
import Cadastro from "./screens/cadastro";
import product from "../product.json";

function App() {
  const [user, setUser] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(product);
  }, [product]);

  const toogleCartOpen = useCallback(() => setCartOpen(!cartOpen), [cartOpen]);

  const cartProductIsCurrentProduct = useCallback(
    (cartProduct, currentProduct) => cartProduct.id === currentProduct.id,
    []
  );

  const addProductToCart = useCallback(
    (product) => {
      const foundProductIndex = cart.findIndex((cartProduct) =>
        cartProductIsCurrentProduct(cartProduct, product)
      );

      if (foundProductIndex !== -1) {
        setCart(
          cart.map((cartProduct, index) =>
            index === foundProductIndex
              ? {
                  ...cartProduct,
                }
              : cartProduct
          )
        );
      } else {
        setCart([
          ...cart,
          {
            ...product,
          },
        ]);
      }

      setCartOpen(true);
    },
    [cart, cartProductIsCurrentProduct]
  );
  const removeProductFromCart = useCallback(
    (product) => {
      setCart(cart.filter((cartProduct) => cartProduct.id !== product.id));
    },
    [cart]
  );

  const cleanCart = useCallback(() => setCart([]), []);

  return (
    <BrowserRouter>
      <ProductsContext.Provider
        value={{
          products,
        }}
      >
        <CartContext.Provider
          value={{
            addProductToCart,
            cart,
            cartOpen,
            cleanCart,
            removeProductFromCart,
            toogleCartOpen,
          }}
        >
          <UserContext.Provider
            value={{
              registrationUser: user,
              setRegistration: setUser,
            }}
          >
            <Menu />
            <ToogleCarrinho cart={cart} />
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.key}
                  path={route.path}
                  element={route.element}
                />
              ))}
              <Route key="login" path="/login" element={<Login />} />
              <Route key="cadastro" path="/cadastro" element={<Cadastro />} />
            </Routes>
          </UserContext.Provider>
        </CartContext.Provider>
      </ProductsContext.Provider>
    </BrowserRouter>
  );
}

export default App;
