import styles from './Title.module.css'

export const Title = ({title, addStyles}) =>{
    return (
        <h2 className={styles.title}>{title}</h2>
    )
}