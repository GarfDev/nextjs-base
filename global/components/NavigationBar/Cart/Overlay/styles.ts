import styled from "styled-components";
import { Menu } from "antd";

export const CustomMenu = styled(Menu)`
  display: flex;
  flex-direction: column;
  margin-top: 13px;
  width: 320px;
  height: 400px;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};
  border: 5px solid ${({ theme }) => theme.color};
  border-radius: 12px;
  flex-direction: column;
  padding: 12;
`;

export const CartContainer = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  font-size: 20px;
`;

export const CartHeader = styled.div`
  font-weight: 500;
  margin: 0px -20px;
  padding: 0px 20px;
  display: flex;
  justify-content: flex-end;
  flex: 1 1 20px;
  border-bottom: 4px solid;
`;

export const CartContent = styled.div`
  flex: 3 1 300px;
`;
