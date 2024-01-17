import styles from './CartWidget.module.css'

const CartWidget = () => {
    return (
        <div className={styles.nav__icons}>
            <div className='bi bi-heart-fill' style={{ color: "#2c2c2c", fontSize: "1.6rem", marginRight: "20px", cursor: "pointer" }}></div>
            <div className='bi bi-bag' style={{ color: "#2c2c2c", fontSize: "1.6rem", cursor: "pointer" }}></div>
            <span className='contador'>0</span>
        </div>
    );
}

export default CartWidget