import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const StyledButton = styled.button`
  background-color: ${Theme.colors.grey1};
  width: ${(props) => (props.addToCart ? "106px" : "100%")};
  height: ${(props) => (props.addToCart ? "40px" : "60px")};
  border-radius: 8px;
  color: ${Theme.colors.white};
  font-size: 14px;
  font-weight: 600;
  :hover {
    background-color: ${(props) =>
      props.addToCart ? `${Theme.colors.primary}` : `${Theme.colors.grey300}`};
  }
`;
