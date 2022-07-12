import { Link } from "react-router-dom"
import { useCartContext } from '../../context/CartContext';

export const Order = ({ order }) => {

    const { orders } = useCartContext()

    return (
        <div className="container my-5">
            <div className="container my-5 formulario">
                <h2 className="titulo">¡Gracias por su compra!</h2>
                <hr />
                <h4 className="titulo">Su número de orden es: {order}</h4>
                <hr />
                <h2 className="titulo">Detalle de la compra</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre producto</th>
                            <th scope="col">Precio Unitario</th>
                            <th scope="col">Cantidad</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                                Object.entries(orders).map(([key, value]) => (
                                    Object.entries(value).map(([id, data]) => {
                                        return (
                                            <tr >
                                                <th scope="row"></th>
                                                <td>{data["nombre"]}</td>
                                                <td>${Intl.NumberFormat('de-DE').format(data["precio"])},00</td>
                                                <td>{data["contador"]}</td>
                                            </tr>
                                        )
                                    })
                                ))
                        }
                    </tbody>
                </table>
                <h3>{orders.key}</h3>
                <Link to="/" className="btn btn-primary">Volver</Link>
            </div>
        </div>
    )

}