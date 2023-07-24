import styles from './LookBook.module.css'
import overalls from '../../../assets/images/overalls.png'
import classic_shirt from '../../../assets/images/classic_shirt.png'
import shirt_red from '../../../assets/images/shirt_red.png'
import overalls_black from '../../../assets/images/overalls_black.png'
import shirt_ from '../../../assets/images/shirt_.png'
import shirt_white_classic from '../../../assets/images/shirt_white_classic.png'
import { Title } from '../../../common/Title/Title'

export const LookBook = () => {
    return (
        <div className={styles.container} >
            <div className={styles.text}>
                <span>ОТ LOYLEN</span>
                <Title title='LOOKBOOK' />
                <span className={styles.margin}>Неповторимые образы, подобранные специально для вас</span>

                <div className={styles.cardClassic_shirt}>
                <img src={classic_shirt} alt='classic_shirt'/>
                <span className={styles.textCloth}>Классическая рубашка 3000 ₽ Брюки с ремнем 3000 ₽</span>
            </div>
            </div>
            <div className={styles.cardOveralls}>
                <img src={overalls} alt='overalls' className={styles.imageOveralls} />
                <span className={styles.textCloth}>Комбинезон 8000 ₽</span>
            </div>

            <div className={styles.shirtRed}>
                <img src={shirt_red} alt='shirt_red'/>
                <span className={styles.textCloth}>Классическая рубашка 3000 ₽ Брюки с ремнем 3000 ₽</span>
            </div>

            <div className={styles.content}>
            <div className={styles.overallsBlack}>
                <img src={overalls_black} alt='overalls_black' />
                <span className={styles.textCloth}>Комбинезон 8000 ₽</span>
            </div>
            <div className={styles.shirt_}>
                <img src={shirt_} alt='shirt_red' />
                <span className={styles.textCloth}>Классическая рубашка 3000 ₽ Брюки с ремнем 3000 ₽</span>
            </div>

            </div>

            <div className={`${styles.cardClassic_shirt} ${styles.cardMargin}`}>
                <img src={shirt_white_classic} alt='shirt_white_classic'/>
                <span className={styles.textCloth}>Классическая рубашка 3000 ₽ Брюки с ремнем 3000 ₽</span>
            </div>

            


        </div>
    )
}