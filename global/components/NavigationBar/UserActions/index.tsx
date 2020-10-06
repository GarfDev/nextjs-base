import React from "react";
import { useDispatch } from "react-redux";
import {
  faUser,
  faShoppingCart,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
// Import resources
import { toggleCart } from "store/core/main/actions";
import { Container, Icon } from "./styles";

const UserActions: React.FC = () => {
  const dispatch = useDispatch();

  // Event handler
  const handleToggleCart = () => {
    dispatch(toggleCart());
  };

  // Main return
  return (
    <Container>
      <Icon icon={faUser} />
      <Icon icon={faHeart} />
      <Icon icon={faShoppingCart} onClick={handleToggleCart} />
    </Container>
  );
};

export default UserActions;
