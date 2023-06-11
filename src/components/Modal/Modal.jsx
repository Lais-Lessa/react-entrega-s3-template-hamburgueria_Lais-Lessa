import { StyledButton } from "../Button/StyledButton";
import { ModalItem } from "./ModalItem";
import { StyledContainerModal } from "./StyledContainerModal";
import { StyledHeaderModal } from "./StyledHeaderModal";
import { StyledModalContent } from "./StyledModalContent";
import { StyledModalList } from "./StyledModalList";

export const Modal = ({ closeCart, itemsInCart, onDelete, setItemsInCart }) => {
  const totalValue = itemsInCart.reduce(
    (totalValue, item) => totalValue + item.price * item.count,
    0
  );

  return (
    <StyledContainerModal>
      <StyledHeaderModal>
        <h2>Carrinho de compras</h2>
        <span onClick={closeCart}>X</span>
      </StyledHeaderModal>
      <StyledModalContent>
        <StyledModalList>
          {itemsInCart.map((item) => (
            <ModalItem key={item.id} item={item} onDelete={onDelete} />
          ))}
        </StyledModalList>
        <div>
          <h3>Total</h3>
          <span>R${totalValue.toFixed(2).replace(".", ",")}</span>
        </div>
        <StyledButton
          onClick={() => {
            setItemsInCart([]);
          }}
        >
          Remover todos
        </StyledButton>
      </StyledModalContent>
    </StyledContainerModal>
  );
};
