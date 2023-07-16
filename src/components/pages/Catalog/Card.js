import { catalog } from "../../../data/catalog"
import { useParams } from "react-router"
import styles from './Catalog.module.css'
import { Button } from "../../../common/Button/Button"


export const Card = () =>{
    return(
        <div className={styles.container}>
            <span className={styles.title}>Каталог</span>
            <div className={styles.content}>
                
                {
                    catalog.map((element) => {
                        if (element.id > 7) 
                        return (
                            <div className={styles.card} key={element.id}>
                                <img
                                    className={styles.imageCard}
                                    src={element.image.src}
                                    alt={element.image.alt}
                                />
                                <div className={styles.cardText}>
                                    <span>{element.title}</span>
                                    <span className={styles.price}>{element.price} ₽</span>
                                </div>
                            </div>
                        )
                    })
                }
                

            </div>
            <Button title={'показать еще'} addStyles={styles.marginButton}/>

        </div>










        
    )

}