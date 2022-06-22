import { useContext, useMemo } from "react";
import CartContext from "../../../context/CartContext";
import ProductsContext from "../../../context/ProductsContext";
import { Container, Description, Name } from "./style";
import { DeleteOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Button, Popconfirm } from "antd";

const CartProduct = ({ product: cartProduct }) => {
  const { products } = useContext(ProductsContext);
  const { removeProductFromCart } = useContext(CartContext);

  const foundProduct = useMemo(
    () =>
      products.find((currentProduct) => currentProduct.id === cartProduct.id),
    [cartProduct.id, products]
  );

  const product = useMemo(
    () => ({
      ...foundProduct,
      ...cartProduct,
    }),
    [foundProduct, cartProduct]
  );

  return (
    <Container>
      <img
        src={product.photo}
        alt={product.course_name}
        width={50}
        height={50}
      />
      <div>
        <Name>Curso de {product.course_name}</Name>
        <Description>Duração: {product.duration} horas</Description>
        <Description>Valor: R${product.price.toFixed(2)}</Description>
      </div>
      <Popconfirm
        placement="bottomRight"
        title={"Tem certeza que deseja remover o produto do carrinho?"}
        icon={<QuestionCircleOutlined style={{ color: "red" }} />}
        onConfirm={() => removeProductFromCart(product)}
        okText="Remover"
        cancelText="Cancelar"
        okButtonProps={{ danger: true }}
      >
        <Button
          icon={
            <DeleteOutlined
              style={{
                fontSize: "14px",
              }}
            />
          }
          size="middle"
          shape="circle"
        />
      </Popconfirm>
    </Container>
  );
};

export default CartProduct;
