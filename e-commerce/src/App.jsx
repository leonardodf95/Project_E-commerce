import Menu from './components/Menu'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import routes from './defaults/routes';


function App() {

  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        {
          routes.map(
            route =>
              <Route
                key={route.key}
                path={route.path}
                element={route.element} />
          )
        }
      </Routes>
    </BrowserRouter>
  )
}

export default App
