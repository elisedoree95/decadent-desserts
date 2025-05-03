import ddLogo from '../../img/dd_logo.jpeg'
import cart from '../../img/cart.png'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import styles from './MainNavigation.module.css'

const MainNavigation = () => {
    const { openCart, cartQuantity } = useCart()
    return (
        <nav className={styles.mainNav}>
            <div className={styles.logo}>
                <img src={ddLogo} alt="Decadent Desserts" />
            </div>
            <ul className={styles.navMenu}>
                <NavLink to='/'>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to='/products'>
                    <li>Produits</li>
                </NavLink>
                <NavLink to='/about'>
                    <li>A propos</li>
                </NavLink>
            </ul>
            {!!cartQuantity && (
                <button
                    onClick={openCart}
                    className={styles.cartButton}
                    data-value={cartQuantity}
                >
                    <img src={cart} alt='Shopping cart' />
                </button>
            )}
        </nav>
    )
}

export default MainNavigation