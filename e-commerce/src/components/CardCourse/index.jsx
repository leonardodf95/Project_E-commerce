import { useContext, useState } from "react";
import { Modal, Button as ButtonAntD } from "antd";
import { CardArea, NameTitle, Photo, ButtonsArea, Buttons } from "./style";
import CartContext from "../../context/CartContext";

const CardCourse = ({ product }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { addProductToCart } = useContext(CartContext)

  const showDetails = () => {
    setModalOpen(true);
  };

  const handleOk = () => {
    setModalOpen(false)
  }
  const handleAddProductToCart = () => {
    addProductToCart({
      id: product.id,
    })
  }

  return (
    <CardArea>
      <Photo src={product.photo} />
      <NameTitle>Curso de {product.course_name}</NameTitle>
      <ButtonsArea>
        <Buttons onClick={showDetails}>Detalhes</Buttons>
        <Modal
          title={product.course_name}
          visible={modalOpen}
          footer={[
            <ButtonAntD type="primary" onClick={handleOk}>OK</ButtonAntD>
          ]}
          onOk={handleOk}
        >
          <p>Preço: R${product.price}</p>
          <p>Duração: {product.duration} horas</p>
          <p>Professor: {product.teacher_name}</p>
          <p>Descrição: {product.description}</p>
        </Modal>
        <Buttons onClick={handleAddProductToCart}>Comprar</Buttons>
      </ButtonsArea>
    </CardArea>
  );
};

export default CardCourse;
