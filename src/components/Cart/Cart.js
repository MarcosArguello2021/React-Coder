import { useCartContext } from "../../context/CartContext"
import { BsFillTrashFill } from "react-icons/bs"
import { Link } from 'react-router-dom'
import EmptyCart from "./EmptyCart"
import './Cart.scss'

const Cart = () => {

    const { cart, totalPrice, emptyCart, removeItem } = useCartContext()
    if (cart.length === 0) return <EmptyCart />
    return (
        <div className="container my-2 cart">
            <div className="compra">
                <h2>CARRITO DE COMPRAS</h2>
            </div>

            {
                cart.map((item) => (
                    <div key={item.id} className="row justify-content-between align-items-center my-2 items">
                      
                        <div className="col-2">
                            <img src={item.img} className="img-responsive" />
                        </div>
                        <div className="col-3">
                            <h5>{item.nombre}</h5>
                        </div>
                        <div className="col-2">
                            <p>Cantidad: {item.contador}</p>
                        </div>
                        <div className="col-2">
                            <h6>Precio: ${Intl.NumberFormat('de-DE').format(item.precio)},00</h6>
                        </div>
                        <div className="col-2">
                            <button onClick={() => removeItem(item.id)} className="btn btn-danger"><BsFillTrashFill /></button>
                        </div>
                    </div>

                ))
            }
            <br/>
            <h4>TOTAL DE LA COMPRA:  ${Intl.NumberFormat('de-DE').format(totalPrice())},00</h4>
            <div className="compra">
                <button onClick={emptyCart} className="btn btn-danger">VACIAR CARRITO</button>
                <Link to="/checkout" className="btn btn-success mx-4">TERMINAR LA COMPRA</Link>
            </div>
        </div>
    )
}

export default Cart