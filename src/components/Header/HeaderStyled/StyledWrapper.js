import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1368px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 17px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    max-width: 90%;
  }
`;
