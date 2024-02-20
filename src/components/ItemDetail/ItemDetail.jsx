
import styles from './ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount'
import { useCart } from '../../context/CartContext'
import { useNotification } from '../../notification/NotificationService'


const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const { showNotification } = useNotification();

    const { addItem, getProductQuantity } = useCart()

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id, name, price, quantity, img, category
        }
        addItem(objProductToAdd)

        showNotification('success', `Agregaste ${quantity} unidades de ${name}`)
    }

    const productQuantity = getProductQuantity(id)

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
                    <ItemCount onAdd={handleOnAdd} stock={stock} initial={productQuantity} />
                </footer>
            </div>
        </article>
    )
}

export default ItemDetail