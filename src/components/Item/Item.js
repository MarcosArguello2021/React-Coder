import { ItemCount} from '../ItemCount/ItemCount'
import './Item.scss'

const Item = ({item}) => {

    return (
        <div className="item">
            <img src={item.img} className="img-responsive"/>
            <h2 className="nombre">{item.nombre}</h2>
            <h3 className="variedad">Variedad: {item.variedad}</h3>
            <h4>Precio: ${item.precio}</h4>
            <ItemCount/>
        </div>
    )
}

export default Item