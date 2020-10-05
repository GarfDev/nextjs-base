import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.color};
  padding: 6px 40px;
  height: 70px;
  width: 100%;
`;
