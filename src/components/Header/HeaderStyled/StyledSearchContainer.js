import styled from "styled-components";
import { Theme } from "../../../styles/Theme";

export const StyledSearchContainer = styled.div`
  width: 100%;
  min-width: 365px;
  background-color: transparent;
  position: relative;
  padding: 0 10px;
  margin-left: 17px;

  input {
    width: 100%;
    height: 60px;
    border: 2px solid ${Theme.colors.grey100};
    border-radius: 8px;
    outline: none;
    padding: 15px;
  }
  ::placeholder {
    color: ${Theme.colors.grey100};
    font-size: 16px;
    font-weight: 400;
  }
  @media (max-width: 768px) {
    min-width: 90vw;
    padding: 0;
    margin: 0;
  }
`;
