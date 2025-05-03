import styles from './Footer.module.css'
const Footer = () => {
    const currentDate = new Date()
    return (
        <div className={styles.footer}>
            &copy; {`D.C. Mbassi, ${currentDate.getFullYear()}`}
        </div>
    )
}

export default Footer