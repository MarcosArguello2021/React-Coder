import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { collection, addDoc, doc, getFirestore, updateDoc, getDocs, writeBatch, documentId, query, where } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

import './Checkout.scss'

export const Checkout = () => {

    const { cart, totalPrice, emptyCart } = useCartContext()
    const [values, setValues] = useState({
        nombre: '',
        email: '',
        direccion: ''
    })
    const [orderId, setOrderId] = useState(null)

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (values.nombre.length < 3) {

            return
        }
        if (values.nombre.length < 3) {

            return
        }
        if (values.nombre.length < 3) {

            return
        }

        const orden = {
            buyer: values,
            items: cart.map(({ id, contador, nombre, precio }) => ({ id, contador, nombre, precio })),
            total: totalPrice()
        }
        const batch = writeBatch(db)
        const productosRef = collection(db, "productos")
        const ordersRef = collection(db, "orders")

        const q = query(productosRef, where(documentId(), 'in', cart.map(el => el.id)))
        const outOfStock = []
        const productos = await getDocs(q)

        productos.docs.forEach((doc) => {
            const itemToUpdate = cart.find(prod => prod.id === doc.id)
            if ((doc.data().cantidad - itemToUpdate.contador) >= 0) {
                batch.update(doc.ref, {
                    cantidad: doc.data().cantidad - itemToUpdate.contador
                })
            } else {
                outOfStock.push(itemToUpdate)
            }
        })

        if (outOfStock.length === 0) {
            addDoc(ordersRef, orden)
            .then((doc) => {
                batch.commit()
                setOrderId(doc.id)
                emptyCart()
            })
        } else {
            alert("Hay item sin stock")
        }
    }

    if (orderId) {
        return (
            <div className="container my-5">
                <h2>Gracias por su compra</h2>
                <hr />
                <p>Su número de orden es: {orderId}</p>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }


    return (
        <div className="container my-5 formulario">
            <h2 className="titulo">Checkout</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <input
                    value={values.nombre}
                    name="nombre"
                    onChange={handleInputChange}
                    type={"text"}
                    placeholder="Tu nombre"
                    className='form-control my-2'
                />
                <input
                    value={values.email}
                    name="email"
                    onChange={handleInputChange}
                    type={"text"}
                    placeholder="email@example.com"
                    className='form-control my-2'
                />
                <input
                    value={values.direccion}
                    name="direccion"
                    onChange={handleInputChange}
                    type={"text"}
                    placeholder="Tu dirección"
                    className='form-control my-2'
                />
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Enviar</button>
            </form>
            <div className="titulo">
                <button className="btn btn-danger my-5 " onClick={emptyCart}>Cancelar pedido</button>
            </div>
        </div>
    )
}