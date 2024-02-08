import styles from './Checkout.module.css'
import { useCart } from '../../context/CartContext'
import OrderForm from '../OrderForm/OrderForm'
import OrderView from '../OrderView/OrderView'
import { db } from '../../services/firebase/firebaseConfig'
import { collection, getDocs, where, query, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { useNotification } from '../../notification/NotificationService'
import { useState } from 'react'

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderSnapshot, setOrderSnapshot] = useState(null)
    const { cart, total, clearCart } = useCart()
    const { showNotification } = useNotification()

    const createOrder = async (userData) => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: userData,
                item: cart,
                total
            }
            const batch = writeBatch(db)
            const outOfStock = []

            const ids = cart.map(prod => prod.id)
            const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids))

            const querySnapshot = await getDocs(productsCollection)
            const { docs } = querySnapshot

            docs.forEach(doc => {
                const fields = doc.data()
                const stockDb = fields.stock

                const productsAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productsAddedToCart.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...fields })
                    console.log(outOfStock)
                }
            })

            if (outOfStock.length === 0) {
                batch.commit()

                const orderCollection = collection(db, 'orders')
                const orderSnapshot = await addDoc(orderCollection, objOrder)

                setOrderSnapshot(orderSnapshot)
                clearCart()
            } else {
                showNotification('error', 'Hay productos sin stock disponible')
            }
        } catch (error) {
            showNotification('error', 'Hubo un al generar la orden')
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <h1 className={styles.loading}>Se está generando su orden...</h1>
    }

    if (orderSnapshot) {
        return <OrderView orderSnapshot={orderSnapshot} style={{padding:'80px 0 0 0'}} />
    }

    return (
        <div className={styles.container__checkout}>
            <h1 className={styles.title__checkout}>Checkout</h1>
            <div className={styles.container__orderform}>
                <OrderForm onCreate={createOrder} />
            </div>
        </div>
    )
}

export default Checkout