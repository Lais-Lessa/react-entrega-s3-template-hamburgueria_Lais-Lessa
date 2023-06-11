import styled from "styled-components";
import { Theme } from "../../../styles/Theme";

export const StyledCartContainer = styled.div`
  position: relative;

  div {
    position: absolute;
    width: 20px;
    height: 24px;
    background-color: ${Theme.colors.primary};
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 15px;
    left: 16px;
  }

  span {
    font-size: 14px;
    font-weight: 900;
    color: ${Theme.colors.white};
  }
`;
