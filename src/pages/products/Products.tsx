import { useEffect, useState } from "react"
import ProductCard from "../../components/ProductCard/ProductCard"
import SearchBar from "../../components/SearchBar/SearchBar"
import { products } from "../../data/products"
import styles from './Products.module.css'

const Products = () => {
    const [search, setSearch] = useState('')
    const [displayedProducts, setDisplayedProducts] = useState(products)

    useEffect(() => {
        if (!!search.length) {
            setDisplayedProducts(products.filter(p => p.name.toLowerCase().includes(search)))
        } else setDisplayedProducts(products)
    }, [search])

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value.toLowerCase())
    }
    return (
        <>
            <h2>Products</h2>
            <SearchBar handleSearch={handleSearch} />
            <div className={styles.productGrid}>
                {!!displayedProducts.length
                    ? displayedProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))
                    : <p>Aucun produit ne correspond à votre recherche.</p>
                }
            </div>
        </>
    )
}

export default Products