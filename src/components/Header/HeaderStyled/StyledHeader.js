import styled from "styled-components";
import { Theme } from "../../../styles/Theme";

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  background-color: ${Theme.colors.grey0};

  @media (max-width: 768px) {
    height: 152px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
`;
