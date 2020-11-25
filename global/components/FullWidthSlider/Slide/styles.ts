import styled, { keyframes } from "styled-components";
import { FloatingContentProps } from "./types";

export const ContainerFadeIn = keyframes`
  from {
    filter: blur(80px);
  } to {
    filter: blur(0);
  }
`;

export const TextFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10%);
  } to {
    opacity: 1;
    transform: translateY(0);

  }
`;

export const Container = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  animation: ${ContainerFadeIn} 0.25s ease-in-out;
  width: 60%;
`;

export const Content = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  animation: ${TextFadeIn} 0.25s ease-in;
`;

export const Header = styled.div`
  white-space: wrap;
  line-height: 1;
  font-weight: bolder;
  font-size: calc(1.5rem + 3vw);
`;

export const Description = styled.div`
  padding: 0 5px;
  font-size: calc(0.8rem + 0.5vw);
`;

export const FloatingContent = styled.div<FloatingContentProps>`
  flex: 1;
  position: absolute;
  perspective: 601px;
  pointer-events: auto;
  transform-style: flat;
  transform-origin: 50% 50%;
  transform: ${({ translateX, translateY }) =>
    `translate3d(${translateX}px, ${translateY}px, 4px)`};
  transition-timing-function: cubic-bezier(0, 1.34, 1, -0.39);
`;
