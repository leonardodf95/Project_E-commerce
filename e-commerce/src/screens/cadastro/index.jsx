import { Form, Input, DatePicker, Button } from "antd"
import { Container, SubTitle, Title, TitleContainer } from "./style";

const Cadastro = () => {
    const [form] = Form.useForm()
    return (
        <Container>
            <TitleContainer>
                <Title>Cadastro</Title>
                <SubTitle>* Campos obrigatórios.</SubTitle>
            </TitleContainer>
           <Form layout="vertical" form={form}>
                <Form.Item label='* Nome:'>
                    <Input placeholder="* Nome"/>
                </Form.Item>
                <Form.Item label='* E-mail:'>
                    <Input placeholder="* E-mail" type='email' />
                </Form.Item> 
                <Form.Item label='* Senha:'>
                    <Input placeholder='* Senha' type='password'/>
                </Form.Item>
                <Form.Item label='Data de Nascimento:'>
                    <DatePicker placeholder="Data de Nascimento"/>
                </Form.Item>
                <Form.Item>
                    <Button>Cadastrar</Button>
                </Form.Item>
           </Form>
        </Container>
    )
}

export default Cadastro;