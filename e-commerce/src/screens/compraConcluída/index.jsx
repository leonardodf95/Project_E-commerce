import { Button } from "antd";
import { Box, Container } from "./style";
import { useNavigate } from 'react-router-dom'

const CompraConcluida = () => {
    const navigate = useNavigate()

    const navigateToHome = () => (navigate('/', {replace:true}))
    
    return (
        <Container>
            <Box>
                <p>Cadastro concluído com sucesso!</p>
                <div>
                <Button type='primary' onClick={navigateToHome}>Início</Button>
                </div>
            </Box>
        </Container>
    )
}

export default CompraConcluida;