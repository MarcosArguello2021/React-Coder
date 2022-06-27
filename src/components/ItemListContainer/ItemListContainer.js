import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/firebase'
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.scss'

export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, "productos")
        const q = categoryId ? query(productosRef, where("variedad", "==", categoryId)) : productosRef
        getDocs(q)
            .then((resp) => {
                const newItems = resp.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setItems(newItems)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])

    return (
        <div className="itemListContainer">
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