import styles from './ItemCount.module.css'
import { useState } from 'react'

const ItemCount = ({stock, initial = 1, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)
    
    const increment = () => {
        if (quantity < stock){
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if (quantity > 1){
            setQuantity(quantity-1)
        }
    }

    return (
        <div className={styles.contenedor__count}>
            <div className={styles.counter}>
                <button className={styles.button__count} onClick={decrement}>-</button>
                <p className={styles.count}>{quantity}</p>
                <button className={styles.button__count} onClick={increment}>+</button>
            </div>
            <div>
                <button className={styles.button__cart} onClick={() => onAdd(quantity)}>Agregar al carrito</button>
            </div>
        </div>
        

    )
}

export default ItemCount

