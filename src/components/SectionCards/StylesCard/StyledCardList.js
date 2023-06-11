import styled from "styled-components";

export const StyledCardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 56px;

  @media (max-width: 768px) {
    flex-wrap: nowrap;
  }
`;
