import { useCart } from '../../context/CartContext'
import { formatCurrency } from '../../utils/formatCurrency'
import { products } from '../../data/products'
import CartItem from '../CartItem/CartItem'
import React from 'react'
import styles from './Cart.module.css'

type CartProps = {
    isOpen: boolean
}

const Cart = ({ isOpen }: CartProps) => {
    const { closeCart, cartItems } = useCart()
    const cartClassName = isOpen ? styles.cart : `${styles.cart} ${styles.hidden}`
    const overayClassName = isOpen ? styles.cartOverlay : '' 

    const handleOutsideInteraction = (e: React.MouseEvent<HTMLElement>) => {
        closeCart()
    }
    const stopEventPropagation = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation()
    }

    return (
        <div className={overayClassName} onClick={handleOutsideInteraction}>
            <div className={cartClassName} onClick={stopEventPropagation}>
                <div className={styles.cartHeader}>
                    <h3>Panier</h3>
                    <button onClick={closeCart}>&times;</button>
                </div>
                <div className={styles.cartContent}>
                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item} />
                    ))}
                    <div className={styles.cartTotal}>
                        Total: {formatCurrency(cartItems.reduce((total, cartItem) => {
                            const item = products.find(product => product.id === cartItem.id)
                            return total + (item?.price || 0) * cartItem.quantity
                        }, 0)
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart