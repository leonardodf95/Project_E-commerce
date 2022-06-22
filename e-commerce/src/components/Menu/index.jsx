import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MenuBar, LogoImage, MenuItems, Items, UserContainer, Button } from "./style";
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
      <UserContainer>
        <Button><Link to='/login'><CgProfile/>Entrar</Link></Button>
          <Button><Link to='/cadastro'>Cadastre-se</Link></Button>
      </UserContainer>
      
    </MenuBar>
  );
};

export default Menu;
