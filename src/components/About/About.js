import styles from './About.module.css'
import about from '../../assets/images/about.png'
import for_whom from '../../assets/images/for_whom.png'
import production from '../../assets/images/production_technique.png'
import { Title } from '../../common/Title/Title'

export const About = () => {
    return (
        <div className={styles.container}>
            <div className={`${styles.content} ${styles.contentHeightTablet} `}>
                <div className={styles.description}>
                    <Title title='о бренде Loylen' />
                    <div className={styles.text}>
                        <span >Бренд LOYLEN – одежда для тех, кто любит сочетать разные стили. С 2020 года мы создаем спортивные, классические и повседневные коллекции одежды для женщин. Это позволяет каждой женщине сочетать разные элементы гардероба и создать для себя уникальный образ на разные случаи жизни.</span>
                        <span >LOYLEN любят за качество и натуральные ткани от турецких и итальянских фабрик. Вся одежда изготавливается преимущественно из хлопка, шерсти, льна, за которыми легко ухаживать</span>
                        <span >У нас свое собственное производство – начиная от лекал, разработки образцов и пошива партии. Все модели создаются по современным трендам и предпочтениям наших клиентов. Одежда LOYLEN станет для вас воплощением всех ваших лучших образов</span>
                    </div>
                </div>
                <img src={about} alt='about' className={`${styles.image} ${styles.imageSize}`} />
            </div>

            <div className={styles.content}>
                <img src={for_whom} alt='for_whom' className={styles.image} />
                <div className={styles.description}>
                    <Title title='Для кого' />
                    <div className={styles.text}>
                        <span>Одежда бренда LOYLEN за счет своей универсальности – отличный вариант для девушек разных возрастных категорий. Нас выбирают модницы от 20 до 50 лет, которые хотят создать стильный образ для любого случая жизни.</span>
                        <span>LOYLEN ценят за высокое качество одежды, удобство в носке и приемлемые цены. Благодаря собственному производству лекала получаются с идеальной посадкой и смотрятся идеально на разных типах фигуры. Одежду легко сочетать, можно комбинировать разные стили</span>
                    </div>
                </div>
            </div>

            <div className={`${styles.content} ${styles.tablet}`}>
                <div className={styles.description}>
                    <Title title='техника Производства' />
                    <div className={styles.text}>
                        <span>LOYLEN – это не только онлайн-магазин, но и собственная фабрика по производству одежды. Над каждой модной коллекцией трудятся дизайнер, модельер-конструктор, технолог, внимательный к деталям закройщик и портной</span>
                        <span>Эта команда специалистов имеют большой опыт в легкой промышленности и создании одежды. Именно поэтому все модели получаются идеальными в посадке, утонченными и удобными в носке</span>
                    </div>
                </div>
                <img src={production} alt='production' className={`${styles.image} ${styles.imageTablet}`} />
            </div>

        </div>
    )

}
