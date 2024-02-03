import styles from './CartView.module.css'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import CartItem from '../CartItem/CartItem'
import Swal from 'sweetalert2'

const CartView = () => {

    const { total, totalQuantity, cart, clearCart } = useCart()

    const handleClearCartConfirmation = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: '¿Deseas vaciar el carrito?',
            icon: 'warning',
            showCancelButton: true,
            buttonsStyling: true,
            confirmButtonText: 'Sí, vaciar',
            cancelButtonText: 'Cancelar',
            customClass: {
                confirmButton: 'button confirm',
                cancelButton: 'button cancel',
            },
        }).then((result) => {
            if (result.isConfirmed) {
                handleClearCart()
            }
        });
    }

    const handleClearCart = () => {
        clearCart()
    }
    
    if (totalQuantity === 0) {
        return (
            <div className={styles.cartview__container}>
                <h1>Carrito vacío</h1>
                <Link to='/'>Ver Productos</Link>
            </div>
        )
    }

    return (
        <div className={styles.cartview__container}>
            <h1 className={styles.cart__title}>Carrito de compras</h1>
            <section>
                {cart.map(prod => <CartItem key={prod.id} {...prod} />)}
                <button className={styles.clear__cart} onClick={handleClearCartConfirmation}>Vaciar carrito</button>
            </section>
            <section className={styles.container__total}>
                <h2 className={styles.total}><strong>Total: ${total}</strong></h2>
            </section>
            <section className={styles.container__buttons}>
                <Link to='/checkout' className={styles.checkout__button}>Checkout</Link>
                <Link to='/' className={styles.checkout__button}>Seguir comprando</Link>
            </section>
        </div>
    )
}

export default CartView