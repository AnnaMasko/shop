import { useState, useEffect } from 'react'
import styles from './Basket.module.css'
import { catalog } from '../../data/catalog'
import { Button } from '../../common/Button/Button'
import Select from './Select'
import { useNavigate } from 'react-router'
import { BasketConter } from './BasketConter'
import { Title } from '../../common/Title/Title'

export const Basket = () => {
    const [basket, setBasket] = useState([])
    const [state, setState] = useState(1)

    let navigate = useNavigate()
    const showOrder = () => navigate('/order')

    useEffect(() => {
        const basketState = [];
        catalog.forEach((product) => {
            if (product.cartCount === 1) {
                product = { ...product, url: product.category }
                basketState.push(product)
            }
        })
        setBasket(basketState)
        localStorage.setItem("basket", JSON.stringify(basketState));
    }, []);

    const updateData = (value) => {
        setState(value)
    }

    const cardPrice = (product) => {
        return product.cartPrice = product.price * product.cartCount
    }

    const totalPrice = () => {
        return basket.reduce((sum, product) => sum + product.cartPrice, 0)
    }

    
    const removeProduct = (id) => {
        const newBasket = basket.filter((product) => product.id !== id)
        setBasket(newBasket)
        basket.map((elem) => {
            if (elem.id === id)
                return {
                    ...elem,
                    cartPrice: 0,
                    cartCount: 0
                }
        })
    }

    return (
        <div className={styles.container}>
            <Title title='Корзина' />
            <div className={styles.order}>
                <div>
                    {
                        basket.map((product) => (
                            <div key={product.id} className={styles.productBasket}>
                                <div className={styles.card}>
                                <img src={product.image.src} alt={product.image.alt} className={styles.image} />
                                <div className={styles.description}>
                                    <span className={styles.fontSize}>{product.title}</span>
                                    <div className={styles.textCharacteristik}>
                                        <span className={styles.characteristic}> Размер</span>
                                        <span>Цвет: {product.color}</span>
                                    </div>
                                    <Select product={product} updateData={updateData} basket={basket}/>
                                    <span className={styles.colorText}>Артикул: {product.vendor_code}</span>
                                    <span className={styles.fontSize}>{cardPrice(product)} ₽</span>
                                </div>
                                </div>
                                <Button
                                    addStyles={styles.addStylesButton}
                                    title='X'
                                    handleClick={() => removeProduct(product.id)}
                                    category={product.url}
                                />
                            </div>
                        ))}
                </div>
                <div className={styles.sectionPromo}>
                    <div className={styles.promo}>
                        <span className={styles.promoTitle}>Промокод</span>
                        <div className={styles.inputBlock}>
                            <input type='text' placeholder='Промокод' className={styles.promokodInput} />
                            <Button title='Применить' />
                        </div>

                    </div>

                    <div className={styles.promo}>
                        <span className={styles.promoTitle}>Сумма заказа {totalPrice()} ₽</span>
                        <span className={styles.promoTitle}>Скидка</span>
                        <span className={styles.promoTitle}>Итого</span>
                        <Button title='Оформить заказ' handleClick={() => showOrder()} />
                        <BasketConter totalPrice={totalPrice} />
                        <span className={styles.textAgreement}>Нажимая на кнопку, вы подтверждаете, что ознакомлены и согласны с офертой и политикой конфиденциальности</span>
                    </div>

                </div>
            </div>

        </div>
    )
}