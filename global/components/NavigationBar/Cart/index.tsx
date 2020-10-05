import React, { useState } from "react";
import { Badge, Dropdown } from "antd";
import { useSelector } from "react-redux";
import cartSelector from "store/core/cart/selectors";
import Overlay from "./Overlay";
import { Container, Icon } from "./styles";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

interface Props {}

const Cart: React.FC<Props> = ({}) => {
  const cart = useSelector(cartSelector);
  const [cartActive, setCartActive] = useState(false);

  // Event handle

  const onClick = () => {
    setCartActive(!cartActive);
  };

  // Main return
  return (
    <Container>
      <Dropdown
        trigger={["click"]}
        visible={cartActive}
        overlay={<Overlay cart={cart} />}
        placement="bottomLeft"
      >
        <span onClick={onClick}>
          <Badge count={cart.itemCount}>
            <Icon active={cartActive} icon={faShoppingCart} />
          </Badge>
        </span>
      </Dropdown>
    </Container>
  );
};

export default Cart;
