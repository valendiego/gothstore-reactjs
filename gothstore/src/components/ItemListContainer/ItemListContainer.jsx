import styles from './ItemListContainer.module.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import Beneficios from '../Beneficios/Beneficios'
import Banner from '../Banner/Banner'
import { getProducts } from '../../services/firebase/firestore/products'
import { useAsync } from '../../hooks/useAsync'
import { useNotification } from '../../notification/NotificationService'

const ItemListContainer = ({ greeting }) => {

    const { showNotification } = useNotification()

    const { categoryId } = useParams()

    const asyncFunction = () => getProducts(categoryId)
    
    const { data: products, error, loading } = useAsync(asyncFunction, [categoryId])

    

    if(error){
        showNotification('error', 'Hubo un error')
    }

    if(loading){
        return (
            <div>
                <Banner />
                <Beneficios />
                <div className='container'>
                    <h1 className={styles.greeting}>{greeting = "𝔅𝔦𝔢𝔫𝔳𝔢𝔫𝔦𝔡𝔬𝔰 𝔞 𝔊𝔬𝔱𝔥 𝔖𝔱𝔬𝔯𝔢"}</h1>
                    <h2 className={styles.loading}>Cargando los productos...</h2>
                </div>
            </div>
        )
    }

    if(error){
        return(
            <h1>Hubo un error</h1>
        )
    }

    return (
        <div>
            <div><Banner /></div>
            <div><Beneficios /></div>
            <div className='container'>
                <h1 className={styles.greeting}>{greeting = "𝔅𝔦𝔢𝔫𝔳𝔢𝔫𝔦𝔡𝔬𝔰 𝔞 𝔊𝔬𝔱𝔥 𝔖𝔱𝔬𝔯𝔢"}</h1>
                <h2 className={styles.categories}>{categoryId ?? ''}</h2>
                <div className={styles.container__products}>
                    <ItemList products={products} />
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer