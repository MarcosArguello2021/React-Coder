import './CartWidget.scss';
import { Link } from 'react-router-dom'
import { BsFillCartCheckFill } from "react-icons/bs";
import { useCartContext } from '../../context/CartContext';

const CartWidget = () => {

  const {totalQuantity} = useCartContext()
  console.log(totalQuantity)

  return (
    <Link to="/cart" className="cart-widget">
      <BsFillCartCheckFill />
      <div className="qty-display">{totalQuantity()}</div>
    </Link>
  );
}
export default CartWidget
