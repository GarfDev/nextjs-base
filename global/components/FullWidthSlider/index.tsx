import React, { useState } from "react";
import Slide, { SlideType } from "./Slide";
import { Container, ToolkitContainer, Toolkit } from "./styles";

interface Props {
  slides: Omit<SlideType, "active">[];
}

const FullWidthSlider: React.FC<Props> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Event handler

  const onNextSlide = () => {
    if (document.getSelection()?.toString()) return;
    setCurrentSlide(currentSlide + 1 === slides.length ? 0 : currentSlide + 1);
  };

  // Main return
  return (
    <Container onClick={onNextSlide}>
      {slides.map((slide, index) => (
        <Slide
          key={"fullwidthslider" + index}
          active={index === currentSlide}
          {...slide}
        />
      ))}
    </Container>
  );
};

export default FullWidthSlider;
