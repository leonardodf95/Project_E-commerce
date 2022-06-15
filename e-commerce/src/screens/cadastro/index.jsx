import { Form, Input, DatePicker } from "antd"
import { Container } from "./style";

const Cadastro = () => {
    const [form] = Form.useForm()
    return (
        <Container>
           <Form form={form}>
                <Form.Item label='Nome'>
                    <Input/>
                </Form.Item>
           </Form>
        </Container>
    )
}

export default Cadastro;