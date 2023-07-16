import styles from './Navigation.module.css'
import { pages } from '../../../data/pages'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const Navigation = () => {
    const [show, isSetShow] = useState(false)

    const MouseEnter = () => isSetShow(true)

    const MouseLeave = () => isSetShow(false)

    return (
        <nav className={styles.navigation}
        >
            <span
                onMouseEnter={MouseEnter}
                className={styles.navigationItem}
            >
                Каталог
                <div className={[show ? styles.nav : styles.menu]} onMouseLeave={MouseLeave}>
                    {pages.map((page) => (
                        <Link key={page.id} to={page.url} className={styles.item}>
                            {page.title}
                        </Link>
                    ))}</div>
            </span>
            <Link to='/lookbook'>Lookbook</Link>
            <Link to='/about'>О Бренде</Link>
            
            <span>Информация</span>


        </nav>
    )
}