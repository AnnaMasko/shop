import styles from './Order.module.css'
import { Title } from '../../../common/Title/Title'
import { Checkbox } from '../../../common/Checkbox/Checkbox'
import { useState } from 'react';
import { OrderInfo } from './OrderInfo';
import { Pickup } from './Pickup';

export const Order = () => {
    const [checkedOne, setCheckedOne] = useState(false);
    const [checkedTwo, setCheckedTwo] = useState(false);
    const [checkedThree, setCheckedThree] = useState(false);
    const [checkedFour, setCheckedFour] = useState(false);
    const [checkedFive, setCheckedFive] = useState(false);

    const handleChangeOne = () => {
        setCheckedOne(!checkedOne);
    };

    const handleChangeTwo = () => {
        setCheckedTwo(!checkedTwo);
    };

    const handleChangeThree = () => {
        setCheckedThree(!checkedThree);
    };

    const handleChangeFour = () => {
        setCheckedFour(!checkedFour);
    };

    const handleChangeFive = () => {
        setCheckedFive(!checkedFive);
    };


    return (
        <div className={styles.container}>
            <Title title='Оформление заказа' />
            <div className={styles.content}> 
            
            <div className={styles.deliveryBox}>
                <span className={styles.subTitle}>Способ доставки</span>
                <Checkbox
                    label='Доставка с примеркой (не более 5 товаров)  курьером по Москве (в пределах МКАД) (1-2 дня) 500 ₽'
                    value={checkedOne}
                    onChange={handleChangeOne}
                    addStyles={styles.labelMargin}
                />
                <Checkbox
                    label='Доставка курьером по Москве (в пределах МКАД) (2-3 дня) 300 ₽'
                    value={checkedTwo}
                    onChange={handleChangeTwo}
                    addStyles={styles.labelMargin}
                />
                <Checkbox
                    label='Доставка курьером по Москве (за МКАД)  и Московской области (2-3 дня) 450 ₽'
                    value={checkedThree}
                    onChange={handleChangeThree}
                    addStyles={styles.labelMargin}
                />
                <Checkbox
                    label='Доставка по Росии и миру (срок и стоимость рассчитывается транспортной компанией)'
                    value={checkedFour}
                    onChange={handleChangeFour}
                    addStyles={styles.labelMargin}
                />
                <Checkbox
                    label='Самовывоз из шоурума (при наличии в день заказа) БЕСПЛАТНО'
                    value={checkedFive}
                    onChange={handleChangeFive}
                />
            </div>

            {
                checkedFive ? <Pickup/> : <OrderInfo/>
            }
        

            </div>
            
        


        </div>
    )
}