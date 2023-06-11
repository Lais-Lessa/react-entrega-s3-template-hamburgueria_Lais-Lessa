import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const StyledHeaderModal = styled.div`
  width: 100%;
  height: 54px;
  background-color: ${Theme.colors.primary};
  padding: 13px 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;

  h2 {
    color: ${Theme.colors.white};
    font-size: 18px;
    font-weight: 700;
  }
  span {
    color: ${Theme.colors.white};
    font-size: 14px;
    font-weight: 700;
    font-size: 18px;
  }
`;
