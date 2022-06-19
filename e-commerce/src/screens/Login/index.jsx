import { Button, Form, Input } from "antd";
import { Container, Title, TitleContainer } from "./style";

const Login = () => {
    

    
  
    return (
    <Container>
      <TitleContainer>
        <Title>Login</Title>
      </TitleContainer>
      <Form
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        autoComplete="off"
      >
        <Form.Item
          label="E-Mail: "
          name="email"
          rules={[
            {
              required: true,
              message: "Por favor, insira seu E-Mail cadastrado!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Senha:"
          name="Senha"
          rules={[
            {
              required: true,
              message: "Por Favor, insira sua senha cadastrada!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Entrar
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default Login;
