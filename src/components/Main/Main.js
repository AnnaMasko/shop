import { Route } from 'react-router'
import { Button } from '../../common/Button/Button'
import { catalog } from '../../data/catalog'
import { Banner } from '../Banner/Banner'
import { Lookbook } from '../Lookbook/Lookbook'
import styles from './Main.module.css'
import { useNavigate } from 'react-router'

export const Main = () => {
    let navigate = useNavigate()
    const showAll = () =>{
        navigate('/catalog')  
    }

   
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
                <Button title={'Посмотреть все'} addStyles={styles.alignButton}
                 handleClick={() => showAll()}
                
                />
                
            </div>
            <Lookbook/>

        </div>
    )
}