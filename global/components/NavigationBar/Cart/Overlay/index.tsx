import React from "react";
import { Cart } from "store/core/cart/types";
import { CartContainer, CustomMenu, CartHeader, CartContent } from "./styles";

interface Props {
  cart: Cart;
}

const CartOverlay = (props: Props) => {
  return (
    <CustomMenu>
      <CartContainer>
        <CartHeader>Total: {props.cart.itemSubTotalPrice}$</CartHeader>
        <CartContent></CartContent>
      </CartContainer>
    </CustomMenu>
  );
};

export default CartOverlay;
