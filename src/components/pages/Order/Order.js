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

    const [checked, setChecked] = useState(false);

    function handleChange({ target }) {
        const { name, value, type, checked } = target;
        const stateValue = type === "checkbox" ? checked : value;
    }

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

                <div>
                    <input
                    className={styles.radio}

                        id='delivery_for_Moskow'
                        type="radio"
                        name="delivery"
                        value='delivery'
                        onChange={handleChange}
                    ></input>
                    <label htmlFor='delivery_for_Moskow'>Доставка с примеркой (не более 5 товаров)  курьером по Москве (в пределах МКАД) (1-2 дня) 500 ₽</label>
                </div>

                <div >
                    <input
className={styles.radio}
                        id='delivery_for_Moskow_2days'
                        type="radio"
                        name="delivery"
                        value='delivery_for_Moskow_2days'
                        onChange={handleChange}
                    ></input>
                    <label htmlFor='delivery_for_Moskow_2days'>Доставка курьером по Москве (в пределах МКАД) (2-3 дня) 300 ₽</label>
                </div>

                <div >
                    <input
className={styles.radio}
                        id='delivery_for_oblast'
                        type="radio"
                        name="delivery"
                        value='delivery_for_oblast'
                        onChange={handleChange}
                    ></input>
                    <label htmlFor='delivery_for_oblast'>Доставка курьером по Москве (за МКАД)  и Московской области (2-3 дня) 450 ₽</label>
                </div>

                <div >
                    <input
className={styles.radio}
                        id='delivery_for_Russia'
                        type="radio"
                        name="delivery"
                        value='delivery_for_Russia'
                        onChange={handleChange}
                    ></input>
                    <label htmlFor='delivery_for_Russia'><span>Доставка по Росии и миру (срок и стоимость рассчитывается транспортной компанией)</span></label>
                </div>
         
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