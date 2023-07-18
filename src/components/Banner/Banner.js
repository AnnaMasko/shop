import styles from './Banner.module.css'
import { Button } from '../../common/Button/Button'

export const Banner = () =>{
    return(
        <div className={styles.container}>
        <div className={styles.banner}>
            <div className={styles.content}>
                <h1 className={styles.title} >Осень 2021</h1>
                <Button title={'В каталог'} addStyles={styles.backgroundButton}/>
            </div>         
        </div>
        <div className={styles.block}> 
            <div className={styles.blockContent}>
                <div className={styles.blockDescription}>
                <span className={styles.text} >Новинки</span>
                <Button title={'Смотреть'} addStyles={styles.colorTextButton}/>
                </div>
            </div>
            <div className={`${styles.blockContent} ${styles.blockContentLeft}`}>
            <div className={styles.blockDescription}>
            <span className={styles.text}>Распродажа</span>
                <Button title={'Смотреть'} addStyles={styles.colorTextButton}/>
                </div>
            </div>
            
        </div>
        </div>
    )
}