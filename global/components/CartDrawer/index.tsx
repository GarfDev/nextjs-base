import { Drawer } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "store/core/main/actions";
import { cartActiveSelector } from "store/core/main/selectors";

const CartDrawer: React.FC = () => {
  const dispatch = useDispatch();
  const cartActive = useSelector(cartActiveSelector);

  // Event handler

  const handleOnClose = () => {
    dispatch(toggleCart());
  };

  // Main return
  return (
    <Drawer
      width="406px"
      visible={cartActive}
      onClose={handleOnClose}
      closable={false}
    />
  );
};

export default CartDrawer;
