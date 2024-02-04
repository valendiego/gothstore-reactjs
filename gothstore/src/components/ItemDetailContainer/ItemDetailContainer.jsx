import styles from './ItemDetailContainer.module.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../services/firebase/firestore/products'
import { useAsync } from '../../hooks/useAsync'
import { useNotification } from '../../notification/NotificationService'

const ItemDetailContainer = () => {

    const { showNotification } = useNotification()
    const { productId } = useParams()

    const asyncFunction = () => getProductById(productId)
    const { data: product, error, loading } = useAsync(asyncFunction, [productId])


    if(error){
        showNotification('error', 'Hubo un error')
    }

    if (loading) {
        return (
            <div className='container'>
                <h1 className={styles.loading}>Cargando el producto...</h1>
            </div>
        )
    }

    if (!product) {
        return <h1>El producto no existe</h1>
    }

    return (
        <div className={styles.itemdetail__container}>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer