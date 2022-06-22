import { Form, Input, Button, Radio } from "antd"
import { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { Container, SubTitle, Title, TitleContainer } from "./style";
import UserRegister from "../../API/UserAPI/UserRegister";

const Cadastro = () => {
    const [form] = Form.useForm()
    const {registrationUser , setRegistration} = useContext(UserContext)

    const onFinish = (e) => {
        console.log(e)
        setRegistration(e)
        UserRegister.Register(e)
    }

    useEffect(()=>{console.log('useEffect: ',registrationUser)},[registrationUser])
    return (
        <Container>
            <TitleContainer>
                <Title>Cadastro</Title>
                <SubTitle>* Campos obrigatórios.</SubTitle>
            </TitleContainer>
           <Form layout="horizontal" form={form} onFinish={onFinish} >
                <Form.Item name='name' label='Nome:' rules={[{required: true, message:'Campo Nome é obrigatório.'}]}>
                    <Input placeholder="Nome"/>
                </Form.Item>
                <Form.Item name='last_name' label='Sobrenome:' rules={[{required: true, message:'Campo Sobrenome é obrigatório.'}]}>
                    <Input placeholder="Sobrenome"/>
                </Form.Item>
                <Form.Item name='birthday_date' label='Data de Nascimento:' rules={[{required: true, message:'Campo Data de nascimento é obrigatório.'}]}>
                    <Input type='date' placeholder="Data de Nascimento"/>
                </Form.Item>
                <Form.Item name='gender' label='Identidade de Gênero:' rules={[{required: true, message:'Campo obrigatório.'}]}>
                    <Radio.Group>
                        <Radio value='Cisgênero'>Cisgênero</Radio>
                        <Radio value='Transgênero'>Transgênero</Radio>
                        <Radio value='Não Binário'>Não Binário</Radio>
                        <Radio value='Outro'>Outro</Radio>
                        <Radio value='Prefiro não responder'>Prefiro não responder</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item name='sexual_orientation' label='Orientação sexual:' rules={[{required: true, message:'Campo obrigatório.'}]}>
                    <Radio.Group>
                        <Radio value='Heterossexual'>Heterossexual</Radio>
                        <Radio value='Homossexual'>Homossexual</Radio>
                        <Radio value='Bissexual'>Bissexual</Radio>
                        <Radio value='Assexual'>Assexual</Radio>
                        <Radio value='Pansexual'>Pansexual</Radio>
                        <Radio value='Outro'>Outro</Radio>
                        <Radio value='Prefiro não responder'>Prefiro não responder</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item name='race' label='Qual sua cor ou raça:' rules={[{required: true, message:'Campo obrigatório.'}]}>
                    <Radio.Group>
                        <Radio value='Branca'>Branca</Radio>
                        <Radio value='Preta'>Preta</Radio>
                        <Radio value='Parda'>Parda</Radio>
                        <Radio value='Amarela'>Amarela</Radio>
                        <Radio value='Indígena'>Indígena</Radio>
                        <Radio value='Prefiro não responder'>Prefiro não responder</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item name='email' label='E-mail:' rules={[{required: true, message:'Campo E-mail é obrigatório.'}]}>
                    <Input placeholder="E-mail" type='email'/>
                </Form.Item> 
                <Form.Item name='senha' label='Senha:' rules={[{required: true, message:'Campo Senha é obrigatório.'}]}>
                    <Input.Password placeholder='Senha'/>
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit">Cadastrar</Button>
                </Form.Item>
           </Form>
        </Container>
    )
}

export default Cadastro;


