import styles from './SearchBar.module.css'


type SearchProps = {
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBar = ({handleSearch}: SearchProps) => {
  return (
    <div className={styles.search}>
        <input type="text" name="searchedProduct" onChange={handleSearch} />
    </div>
  )
}

export default SearchBar