import { db } from '../firebaseConfig'
import { getDocs, collection, query, where, doc, getDoc } from 'firebase/firestore'
import { createProductAdaptedFromFirestore } from './createProductAdaptedFromFirestore'

export const getProducts = (categoryId) => {

        const productsCollection = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

            return getDocs(productsCollection)
                .then(querySnapshot => {
                    const productsAdapted = querySnapshot.docs.map(doc => {
                        return createProductAdaptedFromFirestore(doc)
                    })
                    return productsAdapted
                })
                .catch(error => {
                    return error
                })
}

export const getProductById = (id) => {
    const productDocument = doc(db, 'products', id)
    return getDoc(productDocument).then(queryDocumentSnapshot => {
        const productAdapted = createProductAdaptedFromFirestore(queryDocumentSnapshot)
        return productAdapted
    }).catch(error => {
        return error
    })
}