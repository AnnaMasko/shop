import styles from './OrderInfo.module.css'
import { useState } from "react";
import { useValidate } from "../../UseValidate";
import { Checkbox } from "../../../common/Checkbox/Checkbox";

const initialState = {
    name: "",
    surname: "",
    phone: "",
    postcode: "",
    region: "",
    city: "",
    street: "",
    house: "",
    frame: "",
    flat: "",
    payment: "online",
};

export const OrderInfo = () => {
    const [state, setState] = useState(initialState);
    const [checked, setChecked] = useState(false);
    const { error, validate } = useValidate();


    function handleChange({ target }) {
        const { name, value, type, checked } = target;
        const stateValue = type === "checkbox" ? checked : value;
        setState({ ...state, [name]: stateValue });
        validate(name, value)
    }

    const handleChangeCheck = () => {
        setChecked(!checked)
    }


    return (
        <form className={styles.form}>
            <div className={styles.container}>
                <span className={styles.title}>Получатель</span>
                <input
                    className={styles.input}
                    type="text"
                    name="name"
                    value={state.name}
                    placeholder="Имя*"
                    onChange={handleChange}
                />
                <span style={{ color: 'red' }}>{error.name}</span>
                <input
                    className={styles.input}
                    type="text"
                    name="surname"
                    value={state.surname}
                    placeholder="Фамилия"
                    onChange={handleChange}
                />
                <input
                    className={styles.input}
                    type="phone"
                    name="phone"
                    value={state.phone}
                    placeholder="Телефон*"
                    onChange={handleChange}
                ></input>
                <span style={{ color: 'red' }}>{error.phone}</span>
            </div>

            <div className={styles.container}>
                <span className={styles.title}>Адрес</span>
                <input
                    className={`${styles.input} ${styles.inputSize}`}
                    type="text"
                    name="postcode"
                    value={state.postcode}
                    placeholder="Индекс"
                    onChange={handleChange}
                />
                <input
                    className={styles.input}
                    type="text"
                    name="region"
                    value={state.region}
                    placeholder="Регион"
                    onChange={handleChange}
                />
                <input
                    className={styles.input}
                    type="text"
                    name="city"
                    value={state.city}
                    placeholder="Район, населенный пункт"
                    onChange={handleChange}
                />
                <input
                    className={styles.input}
                    type="text"
                    name="street"
                    value={state.street}
                    placeholder="Улица*"
                    onChange={handleChange}
                />
                <div className={styles.infoHouse}>
                    <input
                        className={`${styles.input} ${styles.inputSize}`}
                        type="text"
                        name="house"
                        value={state.house}
                        placeholder="Дом"
                        onChange={handleChange}
                    />
                    <input
                        className={`${styles.input} ${styles.inputSize}`}
                        type="text"
                        name="frame"
                        value={state.frame}
                        placeholder="Корпус"
                        onChange={handleChange}
                    />
                    <input
                        className={`${styles.input} ${styles.inputSize}`}
                        type="text"
                        name="flat"
                        value={state.flat}
                        placeholder="Квартира*"
                        onChange={handleChange}
                    />
                </div>
                <Checkbox label='Сохранить адрес' value={checked} onChange={handleChangeCheck} addStyles={styles.text} />
            </div>

            <div className={`${styles.container} ${styles.containerSize}`}>
                <span className={styles.title}>Способ оплаты</span>
                <div className={styles.radio}>
                    <input

                        id='onlineiOk'
                        type="radio"
                        name="payment"
                        value='online'
                        checked={state.payment === 'online'}
                        onChange={handleChange}
                    ></input>
                    <label htmlFor='onlineiOk'>Картой на сайте</label>
                </div>

                <div className={styles.radio}>
                    <input

                        id='courier'
                        type="radio"
                        name="payment"
                        value='courier'
                        checked={state.payment === 'courier'}
                        onChange={handleChange}
                    ></input>
                    <label htmlFor='courier'>Наличными или картой при получении курьеру</label>
                </div>
                <div className={styles.radio}>
                    <input
                        id='cash'
                        type="radio"
                        name="payment"
                        value='cash'
                        checked={state.payment === 'cash'}
                        onChange={handleChange}
                    ></input>
                    <label htmlFor='cash'>Наличными или картой при получении в пункте выдачи</label>
                </div>
                
            </div>



        </form>
    )

}