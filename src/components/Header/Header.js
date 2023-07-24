import styles from './Header.module.css'

import { Logo } from "./Logo/Logo"
import { Icons } from './Icons/Icons'
import { Navigation } from './Navigation/Navigation'
import { Hamburger } from '../../common/Hamburger/Hamburger'
import { Weather } from '../../common/Weather/Weather'


export const Header = ({showMenu, setShowMenu, weather}) =>{
    return (
        <div className={styles.container} >
            <Hamburger setShowMenu={setShowMenu} showMenu={showMenu}/>
            <Navigation setShowMenu={setShowMenu} showMenu={showMenu}/>
            <Logo />
            <Icons/>
            <Weather weather={weather}/>
        </div>
    )
}