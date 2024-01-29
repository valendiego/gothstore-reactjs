import styles from './ItemDetailContainer.module.css'
import {useState, useEffect} from 'react'
// import {getProductById} from '../../asyncMock.js'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig.js'

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState(null)

    const { productId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productDocument = doc(db, 'products', productId)
        
        getDoc(productDocument)
            .then(queryDocumentSnapshot => {
                const fields = queryDocumentSnapshot.data()
                const productAdapted = { id: queryDocumentSnapshot.id, ...fields }
                setProduct(productAdapted)
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false)
            })

        // getProductById(productId)
        //     .then(response => {
        //         setProduct(response)
        //     })
        //     .catch(error => {
        //         console.error(error)
        //     })
        //     .finally(() => {
        //         setLoading(false)
        //     })
    },[productId])

    if(loading){
        return(
            <div className='container'>
                <h1 className={styles.loading}>Cargando el producto...</h1>
            </div>
        )
    }

    if (!product) {
        return <h1>El producto no existe</h1>
    }

    return(
        <div className={styles.itemdetail__container}>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer