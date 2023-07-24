import { Button } from '../../../common/Button/Button'
import { catalog } from '../../../data/catalog'
import styles from './Product.module.css'
import { useParams } from 'react-router'

export const Product = () => {
    const { url, id } = useParams()

    const element = catalog.find((data) => data.id === +id)


    const addToCard = () =>{
        element.cartCount = 1
        //console.log('кол-во в корзине',element.cartCount)
    }
    
    // console.log(element)
    return (
        <div className={styles.container}>
             <div className={styles.imageGallery}>
                    <img
                        src={element.image.src}
                        alt={element.image.alt}
                        className={styles.imageSize}
                    />
                    <img
                        src={element.image.src}
                        alt={element.image.alt}
                        className={styles.imageSize}
                    />
                </div>
            <div className={styles.product}>
               
                <div className={styles.images}>
                    <img
                        src={element.image.src}
                        alt={element.image.alt}
                        className={styles.image}
                    />
                </div>
                <div className={styles.description}>
                    <span className={styles.text}>Артикул {element.vendor_code}</span>
                    <span className={styles.title}>{element.title}</span>
                    <div>
                        <ul className={styles.size}>
                            <li className={styles.sizeItem} >40</li>
                            <li className={styles.sizeItem}>42</li>
                            <li className={styles.sizeItem}>44</li>
                            <li className={styles.sizeItem}>46</li>
                            <li className={styles.sizeItem}>48</li>
                        </ul>
                        <span className={styles.text}>Таблица размеров</span>
                    </div>
                    <span className={styles.price}>{element.price} ₽</span>
                    <Button 
                    title='Добавить в корзину' 
                    addStyles={styles.colorButton} 
                    handleClick={addToCard}
                    />
                    <div className={styles.textDescription}>
                        <span>Состав ткани</span>
                        <span className={styles.text}>{element.compound}</span>
                    </div>
                    <div className={styles.textDescription}>
                        <span>Рекомендации по уходу</span>
                        <span className={styles.text}>{element.care_advice}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}