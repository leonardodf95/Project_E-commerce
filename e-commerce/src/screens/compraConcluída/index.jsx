import { Button } from "antd";
import { Box, Container } from "./style";
import { useNavigate } from 'react-router-dom'
import { useContext } from "react";
import UserContext from "../../context/UserContext";

const CompraConcluida = () => {
    const navigate = useNavigate()
    const {handleLogout} = useContext(UserContext)

    const navigateToHome = () => {
        handleLogout()
        navigate('/', {replace:true})
        window.location.reload()
    }
    
    return (
        <Container>
            <Box>
                <p>Compra concluída com sucesso!</p>
                <div>
                <Button type='primary' onClick={navigateToHome}>Início</Button>
                </div>
            </Box>
        </Container>
    )
}

export default CompraConcluida;