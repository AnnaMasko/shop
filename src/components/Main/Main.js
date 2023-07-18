import { Button } from '../../common/Button/Button'
import { catalog } from '../../data/catalog'
import { Banner } from '../Banner/Banner'
import { Lookbook } from '../Lookbook/Lookbook'
import styles from './Main.module.css'

export const Main = () => {
   
    return (
       
        <div className={styles.container}>
             <Banner/> 
            <h1 className={styles.titlePage}>Каталог</h1>
            <div className={styles.cards}>
                {
                    catalog.map(element => {
                        if (element.id <= 9 )
                        return(
                            <div className={styles.card} key={element.id}>
                        <img
                        className={styles.imageCard}
                            src={element.image.src}
                            alt={element.image.alt}
                        />
                        <div className={styles.cardText}>
                        <span>{element.title}</span>
                        <span>{element.price} ₽</span>
                        </div>
                    </div>

                        )
                    })
                }
                <Button title={'Посмотреть все'} addStyles={styles.alignButton}/>
                <Lookbook/>
            </div>
            

        </div>
    )
}