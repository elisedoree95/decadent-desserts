import styles from './Home.module.css'

const Home = () => {
    return (
        <>
            <header className={`${styles.hero} ${styles.fadeIn}`}>
                <div className={styles.overlay}>
                    <h1 className={`${styles.heading} ${styles.textFade}`}>
                        Decadent Desserts
                    </h1>
                    <p className={styles.tagline}>Unapologetically delicious</p>
                </div>
            </header>
            <section className={styles.quote}>
                <p>Vous n'avez jamais rien goûté d'aussi bon!</p>
            </section>
            {/* Search bar */}
            {/* Categories */}
        </>
    )
}

export default Home