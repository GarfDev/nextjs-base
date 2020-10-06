import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
`;

export const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
  display: inline-block;
  box-sizing: content-box;
  transition-duration: 0.15s;
  margin-right: 15px;
  font-size: 20px;
  width: 24px;
  height: 24px;
  &:hover {
    color: ${({ theme }) => theme.hoverColor};
  };
  &:active {
    opacity: 0.8;
  }
`;
