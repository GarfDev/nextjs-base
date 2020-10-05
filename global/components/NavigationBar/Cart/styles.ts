import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Icon = styled(FontAwesomeIcon)<{ active: boolean }>`
  display: block;
  box-sizing: content-box;
  margin-top: 3px;
  color: ${({ theme, active }) =>
    !active ? theme.backgroundColor : theme.color};
  background-color: ${({ theme, active }) =>
    !active ? theme.color : theme.backgroundColor};
  border: 3px solid ${({ theme }) => theme.backgroundColor};
  transition-duration: 0.2s;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  padding: 7px;
  &:hover {
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.backgroundColor};
  }
`;
