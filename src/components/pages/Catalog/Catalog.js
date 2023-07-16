import styles from './Catalog.module.css'
import { catalog } from '../../../data/catalog'
import { Button } from '../../../common/Button/Button'
import { useParams } from 'react-router'
import { Card } from './Card'
import { Link } from 'react-router-dom'


export const Catalog = () => {
   

    const url = useParams()
    //console.log(url)
    
   catalog.find( element => {
        if (url.url === undefined) {
           return element.category ==='dresses'   
        }
       return element.category === url.url
    }) 


    if (url.url === undefined)
    return <Card/> 
    else 

    return (
        <div className={styles.container}>
            <span className={styles.title}>Каталог</span>
            <div className={styles.content}>
                
                {
                    catalog.map((element) => {
                        //if (element.id > 7) 
                        //console.log(element.category)
                        console.log(url.url)
                        
                        if (url.url === element.category)
                        
                        return (
                            <div className={styles.card} key={element.id}>
                                <Link to = {`/${element.category}/${element.id}`}><img
                                    className={styles.imageCard}
                                    src={element.image.src}
                                    alt={element.image.alt}
                                />
                                </Link>
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