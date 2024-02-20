import styles from './Item.module.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, img, price, stock}) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={img} className={`card-img-top ${styles.card__img}`}/>
            <div className="card-body">
                <h5 className="card-title"><strong>{name}</strong></h5>
                <p className="card-text">${price}</p>
                <p className="card-text">Stock disponible: {stock}</p>
                <Link to={`/item/${id}`} className={styles.button}>Ver detalle</Link>
            </div>
        </div>
    )
}

export default Item 