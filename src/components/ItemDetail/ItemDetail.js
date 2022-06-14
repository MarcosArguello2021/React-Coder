import { useNavigate, Link } from "react-router-dom"
import { useState, useContext } from "react"
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.scss'
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({ item }) => {

    const { addItem, isInCart } = useContext(CartContext)

    const [contador, setContador] = useState(1)

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        const itemToCart = {
            ...item,
            contador
        }
        addItem(itemToCart)
    }

    return (
        <div className="container mt-2 mb-5 item">
            <div className="row d-flex justify-content-center">
                <div className="col-md-10">
                    <div className="card">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="images p-3">
                                    <div className="text-center p-4"> <img id="main-image" src={item.img} width="250" /> </div>
                                    <div className="thumbnail text-center"> <img src={item.img} width="70" /> </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="product p-4">
                                    <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand">Varietal: {item.variedad}</span>
                                        <h5 className="text-uppercase">{item.nombre}</h5>
                                        <div className="price d-flex flex-row align-items-center"> <span className="act-price">Precio: ${Intl.NumberFormat('de-DE').format(item.precio)},00</span>
                                        </div>
                                    </div>
                                    <p className="about">{item.desc}</p>

                                    <hr />
                                    {
                                        isInCart(item.id)
                                            ? <Link to="/cart" className="btn btn-success my-3">Terminar mi compra</Link>
                                            :
                                            <ItemCount
                                                max={item.cantidad}
                                                contador={contador}
                                                setContador={setContador}
                                                handleAgregar={handleAgregar}
                                            />
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <button className="btn btn-secondary" onClick={handleVolver}>VOLVER</button>
            </div>
        </div>

    )
}

export default ItemDetail