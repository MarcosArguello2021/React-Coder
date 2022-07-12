import ItemList from "../ItemList/ItemList"
import './ItemListContainer.scss'
import { useProductos } from './useProductos'

export const ItemListContainer = () => {
   
    const { items, loading } = useProductos()
    
    return (
        <div className="itemListContainer p-4">
            <h2 className="title">Nuestro catálogo de productos</h2>
            <section>
                {
                    loading
                        ?
                        <button className="btn btn-warning" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Cargando...
                        </button>
                        :
                        <div className="containerList">
                            <ItemList items={items} />
                        </div>
                }
            </section>
        </div>
    )
}