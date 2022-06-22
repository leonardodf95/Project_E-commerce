import Inicio from "../screens/inicio"
import Sobre from "../screens/Sobre/Index"

const ROUTES_INICIO = '/'
const ROUTES_SOBRE = '/sobre'


const routes = [
    {
        path: ROUTES_INICIO,
        element:<Inicio />,
        key: 'inicio',
        label: 'Início'   
    },
    {
        path: ROUTES_SOBRE,
        element:<Sobre />,
        key: 'sobre',
        label: 'Sobre'
    }
]

export default routes