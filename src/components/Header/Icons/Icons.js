import styles from './Icons.module.css'
import search from '../../../assets/images/search.svg'
import authorization from '../../../assets/images/authorization.svg'
import favorites from '../../../assets/images/favorites.svg'
import basket from '../../../assets/images/basket.svg'
import { Link } from 'react-router-dom'

export const Icons = ()=>{
    return(
        <div className={styles.container} >
            <img src = {search} alt='search' className={styles.mobileVersion}/>
            <img src = {authorization} alt='authorizacion' className={styles.mobileVersion}/>
            <img src = {favorites} alt='favorites'className={styles.mobileVersion}/>
            <Link to='basket'> <img src = {basket} alt='basket'/></Link>
        </div>
    )
}