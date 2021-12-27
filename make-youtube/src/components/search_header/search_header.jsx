import React, { useRef } from 'react';
import styles from './search_header.module.css';

const Search_header = ({onSearch}) => {
    const inputRef = useRef();

    const handleSearch = () =>{
        const value = inputRef.current.value;
        onSearch(value);
    }
    const onClick = ()=>{
        handleSearch();
    }
    const onKeyPress=(event)=>{
        if(event.key==='Enter'){
            handleSearch();
        }
    }
    return (
        <header className={styles.header}>
            <a href="./"><img className={styles.logo} src="./images/logo.png" alt="logo" /></a>
            <h1 className={styles.title}>Youtube</h1>
            <input 
            ref= {inputRef}
            className={styles.input} 
            type="text" placeholder='Search' 
            onKeyPress={onKeyPress} 
            />
            <button className={styles.btn} type="submit" onClick={onClick}>
                <img src="./images/search.png" alt="search" />
            </button>
            
        </header>
    )
}

export default Search_header