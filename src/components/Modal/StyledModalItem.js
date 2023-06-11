import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const StyledModalItem = styled.li`
  display: flex;
  width: 100%;
  margin-top: 18px;
  padding-right: 15px;

  div: first-child {
    background-color: ${Theme.colors.grey100};
    max-width: 82px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
  }

  img {
    width: 55px;
    height: 53px;
  }
`;
