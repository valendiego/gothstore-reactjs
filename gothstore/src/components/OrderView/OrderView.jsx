import styles from './OrderView.module.css'
import { db } from '../../services/firebase/firebaseConfig'
import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { useNotification } from '../../notification/NotificationService'
import { Link } from 'react-router-dom'

const OrderView = ({ orderId }) => {
    const [buyer, setBuyer] = useState(null)
    const [item, setItem] = useState(null)
    const [total, setTotal] = useState(null)
    const { showNotification } = useNotification()

    useEffect(() => {
        const getDocument = async (orderId) => {
            const buyById = doc(db, 'orders', orderId)

            try {
                const documentSnapShot = await getDoc(buyById)
                if (documentSnapShot.exists()) {
                    const orderData = documentSnapShot.data()
                    const { item, total, buyer } = orderData
                    setItem(item)
                    setBuyer(buyer)
                    setTotal(total)
                } else {
                    showNotification('error', 'Hubo un error al generar el comprobante')
                }
            } catch {
                showNotification('error', 'Error al generar el comprobante')
            }
        }
        getDocument(orderId)
    }, [orderId, showNotification])

    return (
        <div className="container">
            <div className={styles.container__orderview}>
                <section className={styles.orderview}>
                    <h2 className={styles.title__orderview}>¡Gracias por comprar con nosotros!</h2>
                    <p className={styles.order}>El ID de su compra es: <strong>{orderId}</strong></p>
                    <div className={styles.orderData}>
                        {buyer && (
                            <div className={styles.buyer}>
                                <h3>Datos del Comprador:</h3>
                                <p>Nombre: {buyer.name}</p>
                                <p>Teléfono: {buyer.phone}</p>
                                <p>Email: {buyer.email}</p>
                            </div>
                        )}
                        {item && (
                            <div className={styles.item}>
                                <h3>Detalles de la Compra:</h3>
                                <ul>
                                    {item.map((product) => (
                                        <li key={product.id} style={{listStyle:'none'}}>
                                            {product.name} - Cantidad: {product.quantity} - Precio: {product.price} - Subtotal: {product.price * product.quantity}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                    </div>
                    {total && <p className={styles.total}>Total de la compra: ${total}</p>}
                    <p>Pronto nos pondremos en contacto con usted</p>
                    <Link to={'/'}>Volver al inicio</Link>
                </section>
            </div>
        </div>
    )
}

export default OrderView