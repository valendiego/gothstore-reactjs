
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
                    <h2><strong>{name}</strong></h2>
                </header>
                <section className={styles.info}>
                    <p>
                        Categoría: {category}
                    </p>
                    <p className={styles.description}>
                        {description}
                    </p>
                    <p>
                        <strong>${price}</strong>
                    </p>
                </section>
                <footer>
                    {
                        !isInCart(id) ? (
                            <ItemCount onAdd={handleOnAdd} stock={stock} initial={1}/>
                        ) : (
                            <Link to='/cart'>Finalizar compra</Link>
                        )
                    }
                </footer>
            </div>
        </article>
    )
}

export default ItemDetail