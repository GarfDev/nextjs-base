import React from "react";
import { Container } from "./styles";
import Cart from "./Cart";

const NavigationBar: React.FC = () => {
  // Main return
  return (
    <Container>
      <Cart />
    </Container>
  );
};

export default NavigationBar;
