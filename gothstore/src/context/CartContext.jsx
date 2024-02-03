import { useState, createContext, useContext } from 'react'

export const CartContext = createContext({
    cart: [],
    addItem: () => { },
    isInCart: () => { },
    totalQuantity: 0,
    total: 0,
    clearCart: () => { }
})


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd])
        } else {
            const cartUpdated = cart.map(prod => {
                if (prod.id === productToAdd.id) {
                    return {
                        ...prod,
                        quantity: productToAdd.quantity
                    }
                } else {
                    return prod
                }
            })
            setCart(cartUpdated)
        }
    }

    const isInCart = (productId) => {
        return cart.some(prod => prod.id === productId)
    }

    const getItem = (productId) => {

    }

    const removeItem = (productId) => {
        const cartUpdated = cart.filter(prod => prod.id !== productId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const getTotalQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity
        })

        return accu
    }

    const totalQuantity = getTotalQuantity()

    const getTotal = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity * prod.price
        })

        return accu
    }

    const total = getTotal()

    const getProductQuantity = (productId) => {
        const product = cart.find(prod => prod.id === productId)
        return product?.quantity
    }  

    return (
        <CartContext.Provider value={{ cart, isInCart, clearCart, addItem, getItem, removeItem, totalQuantity, total, getProductQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}