import { useCart } from "../../context/CartContext"
import { products } from '../../data/products'
import { formatCurrency } from "../../utils/formatCurrency"
import styles from './CartItem.module.css'

type CartItemProps = {
    id: number
    quantity: number
}
const CartItem = ({ id, quantity }: CartItemProps) => {
    const { removeItem } = useCart()
    const item = products.find(product => product.id === id)

    if (item == null) return null

    return (
        <div className={styles.cartItem}>
            <div className={styles.item}>
                {item.imageUrl && (
                    <div className={styles.itemImage}>
                        <img src={item.imageUrl} />
                    </div>
                )}
                <div className={styles.itemData}>
                    <p>
                        {item.name} {quantity > 1 && (
                            <span className={`${styles.itemQty} ${styles.muted}`}>
                                x{quantity}
                            </span>
                        )}
                    </p>
                    <p className={`${styles.itemPrice} ${styles.muted}`}>
                        {formatCurrency(item.price)}
                    </p>
                </div>
            </div>
            <div className={styles.itemAction}>
                <p>{formatCurrency(item.price * quantity)}</p>
                <button
                    className='cartRemove'
                    onClick={() => removeItem(id)}
                >
                    &times;
                </button>
            </div>
        </div>
    )
}

export default CartItem