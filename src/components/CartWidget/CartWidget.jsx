import styles from './CartWidget.module.css'
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const {totalQuantity} = useCart()
    
    return (
        <div className={styles.nav__icons}>
            <Link to='/cart' className='bi bi-bag' style={{ textDecoration:'none', color: "#2c2c2c", fontSize: "1.6rem", cursor: "pointer" }}>
                <span className={styles.total__quantity}>{totalQuantity}</span>
            </Link>
        </div>
    );
}

export default CartWidget