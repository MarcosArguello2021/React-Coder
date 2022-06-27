import './CartWidget.scss';
import { Link } from 'react-router-dom'
import { BsFillCartCheckFill } from "react-icons/bs";
import { useCartContext } from '../../context/CartContext';

const CartWidget = () => {

  const {totalQuantity} = useCartContext()

  return (
    <Link to="/cart" className={`cart-widget ${totalQuantity() === 0 ? 'widget-hidden' :' '}`}>
      <BsFillCartCheckFill />
      <div className="qty-display">{totalQuantity()}</div>
    </Link>
  );
}
export default CartWidget
