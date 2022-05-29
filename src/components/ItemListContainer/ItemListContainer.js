import { useEffect } from 'react'
import { useState } from 'react'
import { pedirDatos} from '../../mock/pedirDatos'
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.scss'



export const ItemListContainer = () => {


    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((resp) => {
                setItems(resp)
            })
            .catch((error) => {
                console.log("Error", error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div className="itemListContainer">
            <h2 className="title">Nuestro catálogo de productos</h2>

            <section> 
                {
                    loading
                        ?
                        <button className="btn btn-primary" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Cargando...
                      </button>
                        : <>
                        <div className="containerList">
                        <ItemList items={items}/>
                        </div>
                           
                        </>

                }
            </section>
        </div>

    )
}