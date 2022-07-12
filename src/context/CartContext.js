import { createContext, useContext, useState } from "react";

export const CartContext = createContext()

export const useCartContext = () => {
    return useContext(CartContext)
}

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [orders, setOrders] = useState([])

    const addItem = (item) => {
        setCart([...cart, item])
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const totalPrice = () => {
        return cart.reduce((acc, prod) => acc += (prod.precio * prod.contador), 0)
    }

    const totalQuantity = () => {
        return cart.reduce((acc, prod) => acc += prod.contador, 0)
    }

    const emptyCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }

    const addOrders = (item) => {
        setOrders([...orders, item])
    }


    return (
        <CartContext.Provider value={
            {
                cart,
                addItem,
                isInCart,
                totalPrice,
                totalQuantity,
                emptyCart,
                removeItem,
                addOrders,
                orders
            }
        }>
            {children}
        </CartContext.Provider>
    )

}
