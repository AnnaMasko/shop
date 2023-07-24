import styles from './Weather.module.css';
import { ReactComponent as IconWeather } from '../../assets/images/weather.svg';

export const Weather = ({ weather}) => {
    return (
        <div className={styles.container}>
            <IconWeather />
            <div className={styles.content}>
            <span className={styles.item}>
                {weather.temperature} {weather.units}
            </span>
            <span className={styles.item}>
                {weather.city}
            </span>
            <span className={styles.item}>
            {new Date(weather.time).toDateString()}
            </span>
            </div>
        </div>
    );
};