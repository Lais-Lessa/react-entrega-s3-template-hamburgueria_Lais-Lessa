import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const StyledModalContent = styled.div`
  width: 100%;
  height: 357px;
  border: 1px solid ${Theme.colors.grey0};
  background-color: ${Theme.colors.white};
  display: flex;
  gap: 18px;
  flex-direction: column;
  padding: 20px 18px;
  border-radius: 4px;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }

  h3 {
    font-size: 14px;
    font-weight: 600;
    color: ${Theme.colors.gray600};
  }

  span {
    color: ${Theme.colors.grey300};
    font-size: 14px;
    font-weight: 600;
  }
`;
