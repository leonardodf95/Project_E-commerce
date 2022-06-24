import { useState, useCallback, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import "./App.css";
import CartContext from "./context/CartContext";
import UserContext from "./context/UserContext";
import ProductsContext from "./context/ProductsContext";
import LoadingContext from "./context/LoadingContext";
import routes from "./defaults/routes";
import ToogleCarrinho from "./components/Cart";
import Login from "./screens/Login";
import Cadastro from "./screens/cadastro";
import product from "../product.json";
import CadastroConcluido from "./screens/cadastroConcluído";
import { CART_LS, TOKEN_LS, USER_LS } from "./defaults/StorageKeys";
import ProductAPI from "./API/ProductAPI/ProductAPI";

function App() {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [authenticated, setAuthenticated] = useState()
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

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

      if (cart.length == 0) {
        setCartOpen(true);
      }
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

  useEffect(
    () => {
      const storedCart = localStorage.getItem(CART_LS)
      if (!storedCart) return;

      const parsedStoredCart = JSON.parse(storedCart)

      setCart(parsedStoredCart)
    },
    []
  )

  useEffect(
    () => {
      localStorage.setItem(CART_LS, JSON.stringify(cart))
    },
    [cart]
  )

  useEffect(
    () => {
      const tokenStorage = localStorage.getItem(TOKEN_LS)
      const userStorage = localStorage.getItem(USER_LS)
      console.log('token', tokenStorage)
      if(!tokenStorage || !userStorage) {
        setToken(null)
        setAuthenticated(false)
        return
      }
      setToken(tokenStorage)
      const parsedUser = JSON.parse(userStorage)
      setUser(parsedUser)      
      setAuthenticated(true)
    }, []
  )

  const handleLogout = () => {
    localStorage.removeItem(TOKEN_LS)
    localStorage.removeItem(USER_LS)
    localStorage.removeItem(CART_LS)
    setAuthenticated(false)
  }

  useEffect(
    () => {
      (async () => {
        const storedProducts = await ProductAPI.getListProduct()
        console.log('productList', storedProducts)
      })()
    },
    []
  )

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
              user,
              setUser,
              setToken,
              token,
              handleLogout,
              authenticated,
              setAuthenticated
            }}
          >
            <Menu />
            <ToogleCarrinho cart={cart} />
            <LoadingContext.Provider
              value={{
                loading,
                setLoading,
              }}
            >
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
                <Route
                  key="cadastroConcluido"
                  path="/cadastro/sucesso"
                  element={<CadastroConcluido />}
                />
              </Routes>
            </LoadingContext.Provider>
          </UserContext.Provider>
        </CartContext.Provider>
      </ProductsContext.Provider>
    </BrowserRouter>
  );
}

export default App;
