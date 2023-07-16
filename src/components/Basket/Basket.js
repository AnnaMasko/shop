import {  useState } from 'react'
import styles from './Basket.module.css'
import { useEffect } from 'react'
import { catalog } from '../../data/catalog'
import { Button } from '../../common/Button/Button'

export const Basket = () => {
    const [basket, setBasket] = useState([])
    const [value, setValue] = useState('');

    function chengeSelect(event) {
        setValue(event.target.value);
        //console.log(value)
     }

    //console.log(catalog)

    useEffect(() => {
        const basketState = [];

        catalog.forEach((product) => {
            if (product.cartCount === 1) {
                product = { ...product, url: product.category }
                basketState.push(product)
            }
        })
        setBasket(basketState)
    }, []);


    //console.log(basket)

    const cardPrice = (product) =>{
        console.log(product)
        return product.price * value
        
        
    }



    return (
        <div className={styles.container}>
            <span className={styles.title} > Корзина</span>
            <div className={styles.order}>
                {
                    basket.map((product) => (
                        <div key={product.id} className={styles.productBasket}>
                            <img src={product.image.src} alt={product.image.alt} className={styles.image} />
                            <div className={styles.description}>
                                <span className={styles.fontSize}>{product.title}</span>
                                <div className={styles.textCharacteristik}>
                                    <span className={styles.characteristic}> Размер</span>
                                    <span>Цвет: {product.color}</span>
                                </div>

                                <div>
                                    <label className={styles.margin}>Количество</label>
                                    <select name='selectQuantity' className={styles.selectSize} 
                                    value={value}
                                    onChange={chengeSelect}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>
                                </div>

                                <span className={styles.colorText}>Артикул: {product.vendor_code}</span>
                                <span className={styles.fontSize}>{cardPrice(product)} ₽</span>
                            </div>
                        </div>

                    ))}
                    <div>

                <div className={styles.promo}>
                    <span className={styles.promoTitle}>Промокод</span>
                    <div className={styles.inputBlock}>
                    <input type='text' placeholder='Промокод' className={styles.promokodInput}/> 
                    <Button title='Применить'/>
                    </div>

                    </div>

                    <div className={styles.promo}>
                        <span className={styles.promoTitle}>Сумма заказа</span>
                        <span className={styles.promoTitle}>Скидка</span>
                        <span className={styles.promoTitle}>Итого</span>
                        <Button title='Оформить заказ'/>
                        <span className={styles.textAgreement}>Нажимая на кнопку, вы подтверждаете, что ознакомлены и согласны с офертой и политикой конфиденциальности</span>
                    </div>

                    </div>
            </div>

        </div>
    )
}