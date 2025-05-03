import { useCart } from "../../context/CartContext"
import { Product } from "../../data/products"
import { formatCurrency } from "../../utils/formatCurrency"
import styles from './ProductCard.module.css'

type CardProps = {
    product: Product
}

const ProductCard = ({ product }: CardProps) => {
    const { 
        getItemQuantity, 
        increaseItemQuantity, 
        decreaseItemQuantity, 
        removeItem 
    } = useCart()
    const quantity = getItemQuantity(product.id)
    
    return (
        <div className={styles.productCard}>
            <div className={styles.cardInfo}>
                <div className={styles.cardImage}>
                    <img
                        src={product.imageUrl}
                        alt={product.name}
                        className={styles.productCardImage}
                    />
                </div>
                <h4>{product.name}</h4>
                <p>{formatCurrency(product.price)}</p>
            </div>
            <div className={styles.cardActions}>
                {!!quantity && (
                    <div className={styles.cartManip}>
                        <button
                            className={styles.cartQuantity}
                            onClick={() => decreaseItemQuantity(product.id)}
                        >
                            -
                        </button>
                        <div>{quantity}</div>
                        <button
                            className={styles.cartQuantity}
                            onClick={() => increaseItemQuantity(product.id)}
                        >
                            +
                        </button>
                    </div>
                )}
                <div className={styles.cardMainAction}>
                    {!!!quantity && (
                        <button
                            className={styles.cardMainAction}
                            onClick={() => increaseItemQuantity(product.id)}
                        >
                            Ajouter au panier
                        </button>
                    )}
                    {!!quantity && (
                        <button
                            className={styles.cardMainAction}
                            onClick={() => removeItem(product.id)}
                        >
                            Retirer du panier
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductCard