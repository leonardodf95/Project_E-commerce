import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MenuBar, LogoImage, MenuItems, Items, Entrar } from "./style";
import routes from "../../defaults/routes";

const Menu = () => {
  return (
    <MenuBar>
      <LogoImage
        src='..\..\IdiomaLivre_logo.png'
        alt="logo-idiomas"
      />
      <MenuItems>
        {routes.map((route) => (
          <Items key={route.key}>
            <Link to={route.path}>{route.label}</Link>
          </Items>
        ))}
      </MenuItems>
      <Entrar><CgProfile/>Entrar</Entrar>
    </MenuBar>
  );
};

export default Menu;
