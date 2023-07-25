import styles from './Select.module.css'
import { useState } from 'react';

const Select = ({ product, updateData, basket }) => {
    const [value, setValue] = useState(1);

    return (
        <div>
            <label className={styles.margin}>Количество</label>
            <select
                className={styles.selectSize}
                name={product.id}
                value={value}
                onChange={(event) => { setValue(event.target.value)
                    updateData(value)  
                    product.cartCount = event.target.value               
                }}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
        </div>
    )
}
export default Select