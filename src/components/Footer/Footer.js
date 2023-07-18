import { Button } from '../../common/Button/Button'
import logoicon from '../../assets/images/logoicon.svg'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <img src={logoicon} alt='logoicon' className={styles.image} />
                <span className={styles.text}>Нужна помощь с заказом?</span>
                <span className={styles.text}>+ 7 964 705 94 64</span>
                <span className={styles.email}>info@loylen.com</span>
                <div className={styles.description}>
                <span>2021 Интернет-магазин LOYLEN</span>
                <span>Все права защищены</span>
                <span>Разработка дизайна</span>
                </div>
            </div>

            <div className={styles.container}>
                <span className={styles.info}>Подпишитесь на рассылку и первыми получайте информацию о новинках, скидках и специальных предложениях</span>
                <div className={styles.subscribe}>
                <input placeholder='Введите ваш E-mail' type='text' className={styles.input}/>
                <Button title={'подписаться'} />
                </div>

                <div className={styles.content}>
                    <span className={styles.contentTitle}>Каталог</span>
                    <span>Новинки</span>
                    <span>Распродажа</span>
                    <span>Готовые образы</span>
                    <Link to='catalog'>Все товары</Link>

                    <span className={styles.contentTitle}>Покупателям</span>
                    <span>Личный кабинет</span>
                    <span>Таблица размеров</span>
                    <Link to='delivery'>Доставка и оплата</Link>
                    <span>Возврат</span>

                    <span className={styles.contentTitle}>О нас</span>
                    <Link to='about'>О бренде</Link>
                    <Link to='contacts'>Контакты</Link>
                    <span>Оферта</span>
                    <span>Политика конфиденциальности</span>
                </div>
            </div>
        </div>
    )
}