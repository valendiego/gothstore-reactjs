import styles from './NavBar.module.css'
import CartWidget from '../CartWidget/CartWidget.jsx'
import { Link } from 'react-router-dom'
import { getCategories } from '../../services/firebase/firestore/categories.js'
import { useAsync } from '../../hooks/useAsync';

const NavBar = () => {

    const asyncFunction = () => getCategories()
    const { data: categories } = useAsync(asyncFunction, [])

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
                </ul>
                <CartWidget />
            </nav>
        </header>

    )
}

export default NavBar