import styles from './OrderView.module.css'
import { Link } from 'react-router-dom'

const OrderView = ({ orderId }) => {
    return (
        <div className="container">
            <div className={styles.container__orderview}>
                <h1>Gracias por comprar con nosotros</h1>
                <p className={styles.order}>el ID de su compra es: <strong>{orderId}</strong></p>
                <p>Pronto nos pondremos en contacto con usted</p>
                <Link to={'/'}>Volver al inicio</Link>
            </div>
        </div>
    )
}

export default OrderView