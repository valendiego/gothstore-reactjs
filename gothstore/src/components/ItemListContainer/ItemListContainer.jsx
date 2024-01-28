import {useState, useEffect} from 'react'
// import {getProducts, getProductsByCategory} from '../../asyncMock.js' 
import styles from './ItemListContainer.module.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../../services/firebase/firebaseConfig'
import { getDocs, collection, QuerySnapshot } from 'firebase/firestore'

const ItemListContainer = ({ greeting }) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState ([])

    const {categoryId} = useParams()

    useEffect(() => {
        if(categoryId) document.title = 'Goth Store: ' + categoryId
        return() => {
            document.title = 'Goth Store'
        }
    })

    useEffect(() => {
        setLoading(true)

        const productsCollection = collection(db, 'products')

        getDocs(productsCollection)
            .then(querySnapshot => {
                const productsAdapted = querySnapshot.docs.map(doc => {
                    const fields = doc.data() 
                    return {id: doc.id, ...fields}
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.error("error")
            })
            .finally(() => {
                setLoading(false)
            })

        // const asyncFunc = categoryId ? getProductsByCategory : getProducts
        // asyncFunc(categoryId)
        // .then(response => {
        //     setProducts(response)
        // })
        // .catch(error => {
        //     console.error(error)
        // })
        // .finally(() => {
        //     setLoading(false)
        // })
    }, [categoryId])

    if(loading){
        return(
            <div className='container'>
                <h1 className={styles.greeting}>{greeting="𝔅𝔦𝔢𝔫𝔳𝔢𝔫𝔦𝔡𝔬𝔰 𝔞 𝔊𝔬𝔱𝔥 𝔖𝔱𝔬𝔯𝔢"}</h1>
                <h2 className={styles.loading}>Cargando los productos...</h2>
            </div>
        )
        
    }

    return (
        <div className='container'>
            <h1 className={styles.greeting}>{greeting="𝔅𝔦𝔢𝔫𝔳𝔢𝔫𝔦𝔡𝔬𝔰 𝔞 𝔊𝔬𝔱𝔥 𝔖𝔱𝔬𝔯𝔢"}</h1>
            <h2 className={styles.categories}>{categoryId ?? ''}</h2>
            <div className={styles.container__products}>
                <ItemList products={products} />
            </div>
        </div>
    )
}

export default ItemListContainer