import { MenuBar, LogoImage, MenuItems, Items } from "./style"
const Menu = () => {
    return (
        <MenuBar>
            <LogoImage src="https://www.pngitem.com/pimgs/m/567-5676160_voc-conhece-bem-as-bandeiras-pelo-mundo-bandeiras.png" alt="logo-idiomas" />
            <MenuItems>
                <Items>Início</Items>
                <Items>Cursos</Items>
                <Items>Carrinho</Items>
                <Items>Sobre</Items>
            </MenuItems>
        </MenuBar>
    )
}

export default Menu