import React from 'react';
import styles from './search_header.module.css';

const Search_header = (props) => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src="./images/logo.png" alt="logo" />
            <h1 className={styles.title}>Youtube</h1>
            <input className={styles.input} type="text" placeholder='Search' />
            <button className={styles.btn} type="submit">
                <img src="./images/search.png" alt="search" />
            </button>
        </header>
    )
}

export default Search_header