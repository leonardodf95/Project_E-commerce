import { Button } from "antd";
import { BoxDecision, Container } from "./style";
import { useNavigate } from 'react-router-dom'

const CadastroConcluido = () => {
    const navigate = useNavigate()

    const navigateToLogin = () => (navigate('/login', {replace:true}))
    const navigateToHome = () => (navigate('/', {replace:true}))
    
    return (
        <Container>
            <BoxDecision>
                <p>Cadastro concluído com sucesso!</p>
                <div>
                <Button onClick={navigateToHome}>Início</Button>
                <Button type="primary" onClick={navigateToLogin}>Login</Button>
                </div>
            </BoxDecision>
        </Container>
    )
}

export default CadastroConcluido;