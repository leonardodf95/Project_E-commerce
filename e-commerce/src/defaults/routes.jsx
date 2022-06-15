import Cadastro from "../screens/cadastro"
import Inicio from "../screens/inicio"
import Carrinho from "../screens/carrinho"
import Sobre from "../screens/Sobre/Index"

const ROUTES_INICIO = '/'
const ROUTES_CADASTRO = '/cadastro'
const ROUTES_CARRINHO = '/carrinho'
const ROUTES_SOBRE = '/sobre'

const routes = [
    {
        path: ROUTES_INICIO,
        element:<Inicio />,
        key: 'inicio',
        label: 'Início'   
    },
    {
        path: ROUTES_CADASTRO,
        element:<Cadastro />,
        key: 'cadastro',
        label: 'Cadastro'
    },
    {
        path: ROUTES_CARRINHO,
        element:<Carrinho />,
        key: 'carrinho',
        label: 'Carrinho'
    },
    {
        path: ROUTES_SOBRE,
        element:<Sobre />,
        key: 'sobre',
        label: 'Sobre'
    }
]

export default routes