
import styles from './ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'


const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const { addItem, isInCart } = useCart()

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id, name, price, quantity
        }
        addItem(objProductToAdd)
    }

    return (
        <article className={styles.container__detail}>
            <picture>
                <img src={img} alt={name} />
            </picture>
            <div className={styles.detail}>
                <header>
                    <h2 className={styles.name}><strong>{name}</strong></h2>
                    <p className={styles.category}>
                        Categoría: {category}
                    </p>
                </header>
                <section className={styles.info}>
                    <p className={styles.price}>
                        <strong>${price}</strong>
                    </p>

                    <p className={styles.description}>
                        {description}
                    </p>
                </section>
                <footer>
                    {
                        !isInCart(id) ? (
                            <ItemCount onAdd={handleOnAdd} stock={stock} initial={1} />
                        ) : (
                            <div className={styles.itembutton__container}>
                                <Link to='/' className={styles.itembutton}>Seguir comprando</Link>
                                <Link to='/cart' className={styles.itembutton}>Finalizar compra</Link>
                            </div>
                        )
                    }
                </footer>
            </div>
        </article>
    )
}

export default ItemDetail