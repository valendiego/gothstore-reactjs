import styles from './Checkout.module.css'

const Checkout = () => {
    return(
        <div className={styles.checkout__container}>
            <h1>Checkout</h1>
            <button>Generar orden</button>
        </div>
    )
}

export default Checkout