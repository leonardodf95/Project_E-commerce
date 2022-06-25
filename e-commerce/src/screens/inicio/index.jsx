import { useContext } from "react";
import CardCourse from "../../components/CardCourse";
import ProductsContext from "../../context/ProductsContext";
import { CardContainer, Container, HeaderContainer, Text, Title } from "./style";

const Inicio = () => {
  const {products} = useContext(ProductsContext)

  return (
    <Container>
      <HeaderContainer>
        <Title>Idioma Livre!</Title>
        <Text>Uma plataforma de cursos de idiomas online.</Text>
      </HeaderContainer>
      <CardContainer>
        {products.map((product) => {
          return <CardCourse key={product.id} product={product}/>
        })}
      </CardContainer>
    </Container>
  );
};

export default Inicio;
