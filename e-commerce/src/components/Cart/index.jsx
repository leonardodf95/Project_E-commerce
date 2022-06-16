import { BsCart4 } from "react-icons/bs";
import { BtnClean, CartArea, CartButton, TotalArea } from "./style";
import { Empty, Popconfirm } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { useState } from "react";

const ToogleCarrinho = () => {
    const [cartOpen, setCartOpen] = useState(false)

    const toogleCartOpen = () => (setCartOpen(!cartOpen))
    
    return (
    <>
      <CartButton
        open={cartOpen}
        onClick={toogleCartOpen}
      >
        <BsCart4 />
      </CartButton>
      <CartArea open={cartOpen}>
        {/* {cart.length ? (
          <>
            <h2>Produtos selecionados</h2>
            {cart.map((cartProduct, index) => (
              <CartProduct
                key={`${cartProduct.id}_${index}`}
                product={cartProduct}
              />
            ))}
            <Popconfirm
              placement="bottomRight"
              title={"Tem certeza que limpar o carrinho?"}
              icon={<QuestionCircleOutlined style={{ color: "red" }} />}
              onConfirm={cleanCart}
              okText="Limpar"
              cancelText="Cancelar"
              okButtonProps={{ danger: true }}
            >
              <BtnClean>Limpar carrinho</BtnClean>
            </Popconfirm>
            <TotalArea>Total: ${total}</TotalArea>
          </>
        ) : (
          <Empty
            image={
              "https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            }
            description="Carrinho vazio!"
          />
        )} */}
      </CartArea>
    </>
  );
};


export default ToogleCarrinho;