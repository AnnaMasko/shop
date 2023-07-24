import styles from './Button.module.css'

export const Button = ({title, addStyles, handleClick, id}) =>{
    return(
        <button
        id={id}
        onClick={handleClick}
        className={`${styles.button} ${addStyles}`}
        >         
           {title}
        </button>
    )
}