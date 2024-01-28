import styles from './CartWidget.module.css'
import { useCart } from '../../context/CartContext';

const CartWidget = () => {
    const {totalQuantity} = useCart()
    
    return (
        <div className={styles.nav__icons}>
            <div className='bi bi-bag' style={{ color: "#2c2c2c", fontSize: "1.6rem", cursor: "pointer" }}>
                {totalQuantity}
            </div>
        </div>
    );
}

export default CartWidget