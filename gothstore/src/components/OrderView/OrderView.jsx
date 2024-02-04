import styles from './OrderView.module.css'
import { db } from '../../services/firebase/firebaseConfig'
import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { useNotification } from '../../notification/NotificationService'
import { Link } from 'react-router-dom'
import { useAsync } from '../../hooks/useAsync'
import { orderData } from '../../services/firebase/firestore/order'

const OrderView = ({ orderId }) => {

    const { showNotification } = useNotification()

    const asyncFunction = () => orderData(orderSnapshot)
    const { data, loading, error } = useAsync(asyncFunction, [orderSnapshot])
    console.log(data)

    if (loading) {
        return <h1 className={styles.loading}>Cargando...</h1>
    }

    if (error) {
        return showNotification('error', 'Error al generar la orden')
    }


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
                    <Link to={'/'} className={styles.button}>Volver al inicio</Link>
                </section>
            </div>
        </div>
    )
}

export default OrderView