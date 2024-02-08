import styles from './OrderView.module.css'
import { useNotification } from '../../notification/NotificationService'
import { Link } from 'react-router-dom'
import { useAsync } from '../../hooks/useAsync'
import { orderData } from '../../services/firebase/firestore/order'
import OrderViewBuyer from '../OrderViewBuyer/OrderViewBuyer'
import OrderViewItem from '../OrderViewItem/OrderViewItem'

const OrderView = ({ orderSnapshot }) => {

    const { showNotification } = useNotification()

    const asyncFunction = () => orderData(orderSnapshot)
    const { data, loading, error } = useAsync(asyncFunction, [orderSnapshot])

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
                    <p className={styles.order}>El ID de su compra es: <strong>{data.id}</strong></p>
                    <div className={styles.orderData}>
                        <OrderViewBuyer buyer={data.buyer} />
                        <OrderViewItem item={data.item} />
                    </div>
                    <p className={styles.total}>Total de la compra: ${data.total}</p>
                    <p>Pronto nos pondremos en contacto con usted</p>
                    <Link to={'/'} className={styles.button}>Volver al inicio</Link>
                </section>
            </div>
        </div>
    )
}

export default OrderView