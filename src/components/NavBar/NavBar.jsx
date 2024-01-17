import styles from './NavBar.module.css'
import CartWidget from '../CartWidget/CartWidget.jsx'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <Link to='/' className={styles.link__logo}>
                    <h1 className={styles.logo}>𝕲𝖔𝖙𝖍 𝕾𝖙𝖔𝖗𝖊</h1>
                </Link>
                <ul className={styles.ul}>
                    <NavLink to={'/category/Faldas'} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}><button className={styles.nav__link}>Faldas</button></NavLink>
                    <NavLink to={'/category/Corsets'} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}><button className={styles.nav__link}>Corsets</button></NavLink>
                    <NavLink to={'/category/Medias'} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}><button className={styles.nav__link}>Medias</button></NavLink>
                    <NavLink to={'/category/Pantalones'} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}><button className={styles.nav__link}>Pantalones</button></NavLink>
                </ul>
                <CartWidget />
            </nav>
        </header>

    )
}

export default NavBar