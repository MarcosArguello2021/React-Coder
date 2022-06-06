import { useNavigate } from "react-router-dom"
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.scss'

const ItemDetail = ({ item }) => {

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
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
                                    <div className="mt-4 mb-3"> <span class="text-uppercase text-muted brand">Varietal: {item.variedad}</span>
                                        <h5 className="text-uppercase">{item.nombre}</h5>
                                        <div className="price d-flex flex-row align-items-center"> <span class="act-price">Precio: ${Intl.NumberFormat('de-DE').format(item.precio)},00</span>
                                        </div>
                                    </div>
                                    <p className="about">{item.desc}</p>
                                    <div className="cart mt-4 align-items-center"><ItemCount /></div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <button className="btn btn-secondary" onClick={handleVolver}>VOLVER</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail