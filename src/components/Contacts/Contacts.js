import styles from './Contacts.module.css'

export const Contacts = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
            <p className={styles.title}>Контакты</p>
            <div className={styles.description}>
            <span className={`${styles.text} ${styles.textMargin}`} >ИНТЕРНЕТ-МАГАЗИН</span>
            <span className={styles.text}>Если у вас возникли трудности с оформлением, или вы хотите уточнить статус вашего закзаза, вы можете позвонить по номеру  +7 964 705 94 64 или написать нам на почту info@loylen.com</span>
            </div>
            <div className={styles.description}>
            <span className={styles.text}>ШОУРУМ</span>
            <span className={styles.text}>Скоро открытие в Москве</span>
            </div>
            </div>
        </div>
    )
}