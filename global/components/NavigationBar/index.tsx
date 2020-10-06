import React from "react";
// Import resources
import UserActions from "./UserActions";
import { Container } from "./styles";

const NavigationBar: React.FC = () => {
  // Main return
  return (
    <Container>
      <UserActions />
    </Container>
  );
};

export default NavigationBar;
