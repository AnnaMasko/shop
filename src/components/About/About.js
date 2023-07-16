import styles from './About.module.css'
import about from '../../assets/images/about.png'
import for_whom from '../../assets/images/for_whom.png'
import production from '../../assets/images/production_technique.png'

export const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.description}>
                <span className={styles.title}>о бренде Loylen</span>
                <span className={styles.text}>Бренд LOYLEN – одежда для тех, кто любит сочетать разные стили. С 2020 года мы создаем спортивные, классические и повседневные коллекции одежды для женщин. Это позволяет каждой женщине сочетать разные элементы гардероба и создать для себя уникальный образ на разные случаи жизни.</span>
                <span className={styles.text}>LOYLEN любят за качество и натуральные ткани от турецких и итальянских фабрик. Вся одежда изготавливается преимущественно из хлопка, шерсти, льна, за которыми легко ухаживать</span>
                <span className={styles.text}>У нас свое собственное производство – начиная от лекал, разработки образцов и пошива партии. Все модели создаются по современным трендам и предпочтениям наших клиентов. Одежда LOYLEN станет для вас воплощением всех ваших лучших образов</span>
                </div>
                <img src={about} alt='about' className={`${styles.image} ${styles.imageSize}`}/>
            </div>

            <div className={`${styles.content} ${styles.contentHeight}`}>
            <img src={for_whom} alt='for_whom' className={styles.image}/>
                <div className={`${styles.description} ${styles.descriptionMargin}`}>
                <span className={styles.title}>Для кого</span>
                <span className={styles.text}>Одежда бренда LOYLEN за счет своей универсальности – отличный вариант для девушек разных возрастных категорий. Нас выбирают модницы от 20 до 50 лет, которые хотят создать стильный образ для любого случая жизни.</span>
                <span className={styles.text}>LOYLEN ценят за высокое качество одежды, удобство в носке и приемлемые цены. Благодаря собственному производству лекала получаются с идеальной посадкой и смотрятся идеально на разных типах фигуры. Одежду легко сочетать, можно комбинировать разные стили</span>
                </div>                
            </div>

            <div className={`${styles.content} ${styles.contentHeight}`}>
                <div className={`${styles.description} ${styles.descriptionChangeMargin}`}>
                <span className={styles.title}>техника Производства</span>
                <span className={`${styles.text} ${styles.textWidth}`}>LOYLEN – это не только онлайн-магазин, но и собственная фабрика по производству одежды. Над каждой модной коллекцией трудятся дизайнер, модельер-конструктор, технолог, внимательный к деталям закройщик и портной</span>
                <span className={`${styles.text} ${styles.textWidth}`}>Эта команда специалистов имеют большой опыт в легкой промышленности и создании одежды. Именно поэтому все модели получаются идеальными в посадке, утонченными и удобными в носке</span>
                </div>  
                <img src={production} alt='production' className={styles.image}/>              
            </div>

        </div>
    )

}
