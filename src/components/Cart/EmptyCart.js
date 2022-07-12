import { Link } from "react-router-dom"

const EmptyCart = () => {

    return (
        <div className="container my-5 align-items-center">
            <h2>Tu carrito está vacío</h2>
            <hr/>
            <Link to="/" className="btn btn-secondary">Ir a comprar</Link>
        </div>
    )
}

export default EmptyCart