import { Button } from '../../Button/Button'
import lookbook from '../../assets/images/lookbook.png'
import styles from './Lookbook.module.css'



export const Lookbook = ()=>{
    return(
        <div className={styles.container}>
            <img src={lookbook} alt='lookbook' className={styles.image}/>
            <div className={styles.content}>
            <p className={styles.title}>LOOKBOOK</p>
            <span className={styles.text}>При создании коллекций мы учитываем, чтобы все изделия сочетались. Это позволяет подобрать полный образ на все случаи жизни</span>
            <span className={styles.text}>Скидка 10% при покупке полного образа</span>
            
            </div>
            <Button title={'Смотреть'}/>
        </div>
    )
}