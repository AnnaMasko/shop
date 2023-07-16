import styles from './Button.module.css'

export const Button = ({title, addStyles, handleClick}) =>{
    return(
        <button
        //id={id}
        onClick={handleClick}
        className={`${styles.button} ${addStyles}`}
        >         
           {title}
        </button>
    )
}