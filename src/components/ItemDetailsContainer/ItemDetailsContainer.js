import { useEffect, useState } from 'react'
import { pedirDatos } from '../../mock/pedirDatos'
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailsContainer.scss'


export const ItemDetailsContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((resp) => {
                setItem( resp.find((item) => item.id === Number(itemId)) )
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
            <h2 className="title">Característica del producto</h2>

            <section>
                {
                    loading
                        ?
                        <button className="btn btn-primary" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Cargando...
                        </button>
                        : <ItemDetail item={item} />
                }
            </section>
        </div>

    )
}