
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailsContainer.scss'
import { useDetalles } from "./useDetalles"


export const ItemDetailsContainer = () => {

    const { item, loading } = useDetalles()
    
    return (
        <div className="itemListContainer p-4">
            <h2 className="title">Característica del producto</h2>

            <section>
                {
                    loading
                        ?
                        <button className="btn btn-warning btn-lg btn-block" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Cargando...
                        </button>
                        : <ItemDetail item={item} />
                }
            </section>
        </div>

    )
}