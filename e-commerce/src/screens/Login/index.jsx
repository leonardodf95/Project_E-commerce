import { Button, Form, Input } from "antd";
import { Container, Title, TitleContainer } from "./style";
import UserLogin from "../../API/UserAPI/UserLogin";
import { useContext } from "react";
import LoadingContext from "../../context/LoadingContext";
import { useState } from "react";
import LoadingAnimation from "../../components/loadingAnimation";
import UserContext from "../../context/UserContext";
import { TOKEN_LS, USER_LS } from '../../defaults/StorageKeys'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { loading, setLoading } = useContext(LoadingContext);
  const { setUser, setToken } = useContext(UserContext)
  const [loginSuccess, setLoginSuccess] = useState();
  const navigate = useNavigate()
  
  const userLogin = async (e) => {
    setLoading(true);
    const user = await UserLogin.Login(e);
    if (user === undefined) {
      setLoginSuccess(false);
      setLoading(false);
    } else {
      setLoginSuccess(true);
      setUser(user)
      setToken(user.jwt)
      localStorage.setItem(TOKEN_LS, user.jwt)
      localStorage.setItem(USER_LS, JSON.stringify(user))
      setLoading(false);
      navigate('/', {replace: true})
      window.location.reload()
    }
  };

  return (
    <>
      {loading === false ? (
        <Container>
          <TitleContainer>
            <Title>Login</Title>
          </TitleContainer>
          <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            autoComplete="off"
            onFinish={userLogin}
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
              name="password"
              rules={[
                {
                  required: true,
                  message: "Por Favor, insira sua senha cadastrada!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            {loginSuccess === false ? <p>Usuário e/ou senhas inválidas</p> : ""}
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Entrar
              </Button>
            </Form.Item>
          </Form>
        </Container>
      ) : (
        <LoadingAnimation />
      )}
    </>
  );
};

export default Login;
