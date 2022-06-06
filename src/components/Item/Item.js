import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import './Item.scss'

const Item = ({ item }) => {

    return (
        <div className="item">
            <Link to={`/item/${item.id}`}><img src={item.img} className="img-responsive" /></Link>
            <Link to={`/item/${item.id}`} className="link"><h2 className="nombre">{item.nombre}</h2></Link>
            <h3 className="variedad">Variedad: {item.variedad}</h3>
            <h4>Precio: ${Intl.NumberFormat('de-DE').format(item.precio)},00</h4>
            <ItemCount />
            <Link to={`/item/${item.id}`}>
                <button className='btn btn-secondary'>Ver Más</button>
            </Link>
        </div>
    )
}

export default Item