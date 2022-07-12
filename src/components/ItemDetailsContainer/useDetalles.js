import { useEffect, useState } from 'react'
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/firebase"
import { useParams } from 'react-router-dom'

export const useDetalles = () =>{

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

    return {
        item, loading
    }
  
}

