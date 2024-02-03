import styles from './NavBar.module.css'
import CartWidget from '../CartWidget/CartWidget.jsx'
import { Link } from 'react-router-dom'
import { db } from '../../services/firebase/firebaseConfig.js'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { useState, useEffect } from 'react'

const NavBar = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const categoriesCollection = query(collection(db, 'categories'), orderBy('name', 'desc'))

        getDocs(categoriesCollection)
            .then(querySnapshot => {
                const categoriesAdapted = querySnapshot.docs.map(doc => {
                    const fields = doc.data()
                    return {id: doc.id, ...fields}
                })
                setCategories(categoriesAdapted)
            })
    },[])


    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <Link to='/' className={styles.link__logo}>
                    <h1 className={styles.logo}>𝕲𝖔𝖙𝖍 𝕾𝖙𝖔𝖗𝖊</h1>
                </Link>
                <ul className={styles.ul}>
                    <Link to='/'><button className={styles.nav__link}>Inicio</button></Link>
                    {
                        categories.map(cat => (
                            <Link key={cat.id} to={`/category/${cat.slug}`}><button className={styles.nav__link}>{cat.name}</button></Link>
                        ))
                    }
                    {/* <NavLink to={'/category/Faldas'} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}><button className={styles.nav__link}>Faldas</button></NavLink>
                    <NavLink to={'/category/Corsets'} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}><button className={styles.nav__link}>Corsets</button></NavLink>
                    <NavLink to={'/category/Medias'} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}><button className={styles.nav__link}>Medias</button></NavLink>
                    <NavLink to={'/category/Pantalones'} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}><button className={styles.nav__link}>Pantalones</button></NavLink> */}
                </ul>
                <CartWidget />
            </nav>
        </header>

    )
}

export default NavBar