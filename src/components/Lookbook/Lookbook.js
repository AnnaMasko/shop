import { Button } from '../../common/Button/Button'
import lookbook from '../../assets/images/lookbook.png'
import styles from './Lookbook.module.css'
import { useNavigate } from 'react-router'
import { Title } from '../../common/Title/Title'



export const Lookbook = () => {
    let navigate = useNavigate()
    const showLookbook = () => {
        navigate('/lookbook')
    }

    return (
        <div className={styles.container}>
            <img src={lookbook} alt='lookbook' className={styles.image} />
            <div className={styles.content}>
            <Title title='LOOK BOOK' />
                <span className={styles.text}>При создании коллекций мы учитываем, чтобы все изделия сочетались. Это позволяет подобрать полный образ на все случаи жизни</span>
                <span className={styles.text}>Скидка 10% при покупке полного образа</span>

            </div>
            <Button title={'Смотреть'}
                handleClick={()=>showLookbook()}
            />
        </div>
    )
}