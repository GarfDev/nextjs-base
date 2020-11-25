import _ from "lodash";
import React, { useState } from "react";
import {
  Container,
  ContentContainer,
  FloatingContent,
  Description,
  Content,
  Header,
} from "./styles";
import { Slide as SlideType, Direction } from "./types";

const Slide: React.FC<SlideType> = ({
  active,
  title,
  description,
  productURL,
}) => {
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const activeClass = active ? "active" : "hidden";

  // Event handler

  const debouncedContentMovement = _.debounce((direction: Direction) => {
    setTranslateX(-direction.clientX / 90);
    setTranslateY(-direction.clientY / 90);
  }, 5);

  const handleOnMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    debouncedContentMovement({
      clientX: event.clientX,
      clientY: event.clientY,
    });
  };

  // Main return
  return (
    <Container className={activeClass} onMouseMove={handleOnMouseMove}>
      <ContentContainer>
        <Content className={activeClass}>
          <Header>{title}</Header>
          <Description>{description}</Description>
        </Content>
        <Content />
        <FloatingContent
          className={activeClass}
          translateX={translateX}
          translateY={translateY}
        >
          <img src={productURL} width="100%" />
        </FloatingContent>
      </ContentContainer>
    </Container>
  );
};

export default Slide;
export type { Slide as SlideType } from "./types";
