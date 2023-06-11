import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const StyledDivModal = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 18px;
    font-weight: 700;
    color: ${Theme.colors.gray600};
    margin-left: 10px;
  }

  p {
    font-size: 12px;
    font-weight: 700;
    color: ${Theme.colors.primary};
  }
`;
