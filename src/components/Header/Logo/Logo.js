import { Link } from 'react-router-dom'
import logo from '../../../assets/images/logo.svg'
import styles from './Logo.module.css'

export const Logo = () =>{
    return(
        <div className={styles.logo} >
           <Link to='/'> <img src={logo} alt='logo' className={styles.logo}/> </Link>
        </div>
    )
}