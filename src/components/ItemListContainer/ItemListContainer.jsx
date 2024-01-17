import {useState, useEffect} from 'react'
import {getProducts, getProductsByCategory} from '../../asyncMock' 
import styles from './ItemListContainer.module.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState ([])

    const {categoryId} = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts
        asyncFunc(categoryId)
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [categoryId])

    return (
        <div className='container'>
            <h1 className={styles.greeting}>{greeting="𝔅𝔦𝔢𝔫𝔳𝔢𝔫𝔦𝔡𝔬𝔰 𝔞 𝔊𝔬𝔱𝔥 𝔖𝔱𝔬𝔯𝔢"}</h1>
            <div className={styles.container__products}>
                <ItemList products={products} />
            </div>
        </div>
    )
}

export default ItemListContainer