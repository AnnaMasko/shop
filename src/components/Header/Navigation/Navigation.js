import styles from './Navigation.module.css'
import { pages } from '../../../data/pages'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const Navigation = ({ showMenu, setShowMenu }) => {
    console.log(showMenu)
    const [show, isSetShow] = useState(false)
    return (
        <nav className={[showMenu ? styles.mobnav : styles.navigation]}
        >
            <span
                onClick={() => { isSetShow(!show) }}
                className={styles.navigationItem}
            >
                Каталог
                <div className={[show ? styles.nav : styles.menu]}>
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