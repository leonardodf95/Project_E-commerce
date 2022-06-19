import { Form, Input, Button } from "antd"
import { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { Container, SubTitle, Title, TitleContainer } from "./style";

const Cadastro = () => {
    const [form] = Form.useForm()
    const {registrationUser , setRegistration} = useContext(UserContext)

    const onFinish = (e) => {
        console.log(e)
        setRegistration(e)
        
    }

    useEffect(()=>{console.log('useEffect: ',registrationUser)},[registrationUser])
    return (
        <Container>
            <TitleContainer>
                <Title>Cadastro</Title>
                <SubTitle>* Campos obrigatórios.</SubTitle>
            </TitleContainer>
           <Form layout="horizontal" form={form} onFinish={onFinish} >
                <Form.Item name='nome' label='Nome:' rules={[{required: true, message:'Campo Nome é obrigatório.'}]}>
                    <Input placeholder="Nome"/>
                </Form.Item>
                <Form.Item name='email' label='E-mail:' rules={[{required: true, message:'Campo E-mail é obrigatório.'}]}>
                    <Input placeholder="E-mail" type='email'/>
                </Form.Item> 
                <Form.Item name='senha' label='Senha:' rules={[{required: true, message:'Campo Senha é obrigatório.'}]}>
                    <Input.Password placeholder='Senha'/>
                </Form.Item>
                <Form.Item name='dtnascimento' label='Data de Nascimento:'>
                    <Input type='date' placeholder="Data de Nascimento"/>
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit">Cadastrar</Button>
                </Form.Item>
           </Form>
        </Container>
    )
}

export default Cadastro;


