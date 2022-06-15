import { MenuBar, LogoImage, MenuItems, Items } from "./style";
import { Link } from "react-router-dom";
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
    </MenuBar>
  );
};

export default Menu;
