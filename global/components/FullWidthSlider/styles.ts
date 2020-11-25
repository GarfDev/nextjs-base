import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  cursor: pointer;
`;

export const ToolkitContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0px;
  position: fixed;
  width: 100%;
  height: fit-content;
`;

export const Toolkit = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
`;

export const ToolkitItem = styled.span`
  font-weight: bolder;
  font-size: 20px;
`;
