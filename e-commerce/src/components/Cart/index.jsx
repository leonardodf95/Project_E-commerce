import { BsCart4 } from "react-icons/bs";
import { BtnClean, BtnFinishBuy, CartArea, CartButton, TotalArea } from "./style";
import { Empty, Popconfirm } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { useContext, useCallback, useMemo } from "react";
import CartContext from "../../context/CartContext";
import ProductsContext from "../../context/ProductsContext";
import CartProduct from "./CartProduct";

const ToogleCarrinho = () => {
  const { cart, cartOpen, cleanCart, toogleCartOpen } = useContext(CartContext);
  const {products} = useContext(ProductsContext)

  const findProduct = useCallback(
    (productId) => products.find((product) => product.id === productId),
    [products]
  );

  const total = useMemo(
    () => cart.reduce(
      (total, cartProduct) => {
        const foundProduct = findProduct(cartProduct.id)
        const ammountPrice = foundProduct.price
        return total + ammountPrice
      },
      0
    ),
    [cart, findProduct]
  )

  return (
    <>
      <CartButton open={cartOpen} onClick={toogleCartOpen} qty={cart.length}>
        <BsCart4 />
      </CartButton>
      <CartArea open={cartOpen}>
        {cart.length ? (
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
            <BtnFinishBuy>Finalizar compra!</BtnFinishBuy>
          </>
        ) : (
          <Empty
            image={
              "https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            }
            description="Carrinho vazio!"
          />
        )}
      </CartArea>
    </>
  );
};

export default ToogleCarrinho;
