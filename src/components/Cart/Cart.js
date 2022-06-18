import { useCartContext } from "../../context/CartContext"
import { BsFillTrashFill } from "react-icons/bs"
import EmptyCart from "./EmptyCart"

const Cart = () => {

    const {cart, totalPrice, emptyCart, removeItem} = useCartContext()
    if (cart.length === 0) return <EmptyCart/>
    return (
        <div className="container my-5">
            <h2>Tu compra</h2>
            <hr/>

            {
                cart.map((item) => (
                <div key={item.id} className="my-3 flex align-items-center">
                    <h5>{item.nombre}</h5>
                    <p>Cantidad: {item.contador}</p>
                    <h6>Precio: ${Intl.NumberFormat('de-DE').format(item.precio)},00</h6>
                    <button onClick={() => removeItem(item.id)} className="btn btn-danger"><BsFillTrashFill/></button>
                    <hr/>
                </div>
                ))
            }


            <h4>TOTAL:  ${Intl.NumberFormat('de-DE').format(totalPrice())},00</h4>
            <button onClick={emptyCart} className="btn btn-danger">Vaciar carrito</button>

        </div>
        

    )
}

export default Cart