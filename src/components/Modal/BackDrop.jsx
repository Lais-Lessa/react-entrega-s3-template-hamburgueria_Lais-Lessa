import { StyledBackDrop } from "./StyledBackDrop";

export const BackDrop = ({ closeCart }) => {
  return <StyledBackDrop onClick={closeCart} />;
};
