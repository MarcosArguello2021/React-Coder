import { useEffect, useState } from 'react'
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/firebase"
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailsContainer.scss'

export const ItemDetailsContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
        
        const docRef = doc(db, "productos", itemId)
        
        getDoc(docRef)
            .then((doc) => {
                setItem( {id: doc.id, ...doc.data()} )
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