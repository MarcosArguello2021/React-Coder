import './CartWidget.scss';
import { BsFillCartCheckFill } from "react-icons/bs";

export const CartWidget = () => {

  return (
    <div className="cart-widget">
      <BsFillCartCheckFill />
      <div className="qty-display">0</div>
    </div>
  );
};