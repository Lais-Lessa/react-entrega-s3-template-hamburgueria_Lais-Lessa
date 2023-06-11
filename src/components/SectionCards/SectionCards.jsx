import { Items } from "./CardItems/CardItem";
import { StyledCardContainer } from "./StylesCard/StyledCardContainer";
import { StyledCardList } from "./StylesCard/StyledCardList";
import { StyledCardSection } from "./StylesCard/StyledCardSection";

 const SectionCards = ({ products, onAddItem, filteredProducts }) => {
  return (
    <StyledCardContainer>
      <StyledCardSection>
        <StyledCardList>
          {filteredProducts.length > 0
            ? filteredProducts.map((product) => (
                <Items
                  key={product.id}
                  product={product}
                  onAddItem={onAddItem}
                />
              ))
            : products.map((product) => (
                <Items
                  product={product}
                  key={product.id}
                  onAddItem={onAddItem}
                />
              ))}
        </StyledCardList>
      </StyledCardSection>
    </StyledCardContainer>
  );
};
export default SectionCards;