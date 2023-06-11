import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const StyledModalList = styled.ul`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 2px solid ${Theme.colors.grey100};
`;
