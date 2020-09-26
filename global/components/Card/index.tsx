import { FC, ReactElement, ReactNode } from "react";

interface Props {
  Header?: ReactElement;
  bordered: boolean;
  children: ReactNode;
}

const Card: FC<Props> = ({ Header, children, bordered = true }) => {

  // Main return
  return <></>;
};

export default Card;
