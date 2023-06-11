import { StyledButton } from "../../Button/StyledButton";
import { StyledCardItem } from "../StylesCard/StyledCardItem";

export const Items = ({ product, onAddItem }) => {
  const handleSetCart = () => {
    onAddItem(product);
  };

  return (
    <StyledCardItem>
      <div>
        <img src={product.img} alt="Imagem de Comidas" />
      </div>
      <div>
        <h2>{product.name}</h2>
        <span>{product.category}</span>
        <span> R$ {product.price.toFixed(2).replace(".", ",")} </span>
        <StyledButton addToCart onClick={handleSetCart}>
          Adicionar
        </StyledButton>
      </div>
    </StyledCardItem>
  );
};
