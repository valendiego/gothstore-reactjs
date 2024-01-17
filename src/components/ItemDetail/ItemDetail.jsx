import styles from './ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
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
                    <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} />
                </footer>
            </div>
        </article>
    )
}

export default ItemDetail