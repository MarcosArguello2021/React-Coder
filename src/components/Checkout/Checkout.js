import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { collection, addDoc, getDocs, writeBatch, documentId, query, where } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { Formik } from 'formik';
import * as Yup from 'yup'
import './Checkout.scss'
import { Order } from './Order';

const schema = Yup.object().shape({  
    nombre: Yup.string()
               .required('Este campo es obligatorio')
               .min(4, 'El nombre es demasiado corto')
               .max(30, 'El máximo es de 30 caracteres'),
               
    email: Yup.string()
               .required('Este campo es obligatorio')
               .email('Formato de email. inválido'),
    emailConfirm: Yup.string()
               .oneOf([Yup.ref('email'), null],'Los correos deben ser iguales')
               .required('Debe reingresar el email'),
    direccion: Yup.string()
               .required('Este campo es obligatorio')
               .min(4, 'El nombre es demasiado corto')
               .max(30, 'El máximo es de 30 caracteres'), 
    
})

export const Checkout = () => {

    const { cart, totalPrice, emptyCart, addOrders } = useCartContext()

    const [orderId, setOrderId] = useState(null)
    
    const generarOrden = async (values) => {

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
                    addOrders(orden.items)
                    setOrderId(doc.id)
                    emptyCart()
                })
        } else {
            alert("Hay item sin stock")
        }
    }

    if (orderId) {
        return <Order order={orderId} />
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    return (
        <div className="container my-5 formulario">
            <h2 className="titulo">Checkout</h2>
            <hr />
            <Formik
                initialValues={{
                    nombre: '',
                    email: '',
                    emailConfirm: '',
                    direccion: ''
                }}
                onSubmit={generarOrden}
                validationSchema={schema}
            >
                {(formik) => (
                    <form onSubmit={formik.handleSubmit}>
                        <input
                            value={formik.values.nombre}
                            name="nombre"
                            onChange={formik.handleChange}
                            type={"text"}
                            placeholder="Tu nombre"
                            className='form-control my-2'
                        />
                        
                        {formik.errors.nombre && <p className='alert alert-danger'>{formik.errors.nombre}</p>} 

                        <input
                            value={formik.values.email}
                            name="email"
                            onChange={formik.handleChange}
                            type={"text"}
                            placeholder="email@example.com"
                            className='form-control my-2'
                        />

                        {formik.errors.email && <p className='alert alert-danger'>{formik.errors.email}</p>} 
                         
                        <input
                            value={formik.values.emailConfirm}
                            name="emailConfirm"
                            onChange={formik.handleChange}
                            type={"text"}
                            placeholder="email@example.com"
                            className='form-control my-2'
                        />

                        {formik.errors.emailConfirm && <p className='alert alert-danger'>{formik.errors.emailConfirm}</p>} 

                        <input
                            value={formik.values.direccion}
                            name="direccion"
                            onChange={formik.handleChange}
                            type={"text"}
                            placeholder="Tu dirección"
                            className='form-control my-2'
                        />

                        {formik.errors.email && <p className='alert alert-danger'>{formik.errors.email}</p>}

                        <button type="submit" className="btn btn-primary">Realizar compra</button>
                    </form>
                )}

            </Formik>

            <div className="titulo">
                <button className="btn btn-danger my-5 " onClick={emptyCart}>Cancelar pedido</button>
            </div>
        </div>
    )
}