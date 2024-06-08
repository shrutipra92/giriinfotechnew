import React from 'react'
import styles from '@/styles/Loader.module.css'

const Loader = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
        </div>
    )
}

export default Loader