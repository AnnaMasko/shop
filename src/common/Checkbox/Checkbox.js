import styles from './Checkbox.module.css'

export const Checkbox = ({ label, value, onChange, addStyles}) => {
    

    return (
        <label>
            <input type="checkbox" checked={value} onChange={onChange} className={`${styles.checkbox} ${addStyles}`} />
            {label}
        </label>
    )
}