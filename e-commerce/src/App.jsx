import Menu from "./components/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import UserContext from "./context/UserContext";
import routes from "./defaults/routes";
import ToogleCarrinho from "./components/Cart";
import { useState } from "react";
import Login from "./screens/Login";

function App() {
  const [user, setUser] = useState([]);

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{
          registrationUser: user,
          setRegistration: setUser
        }}
      >
        <Menu />
        <ToogleCarrinho />
        <Routes>
          {routes.map((route) => (
            <Route key={route.key} path={route.path} element={route.element} />
          ))}
          <Route key='login' path='/login' element={<Login/>}/>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
