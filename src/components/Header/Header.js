import styles from './Header.module.css'

import { Logo } from "./Logo/Logo"
import { Icons } from './Icons/Icons'
import { Navigation } from './Navigation/Navigation'


export const Header = () =>{
    return (
        <div className={styles.container} >
            <Navigation/>
            <Logo />
            <Icons/>
        </div>
    )
}