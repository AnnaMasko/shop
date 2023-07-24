import styles from './Basket.module.css'
import { useContext } from 'react'
import { CartContext } from '../../App'

export const BasketConter = ({totalPrice}) =>{

    const { totalCount, setTotalCount } = useContext(CartContext)   
    


    return (
        <>
        <span>{totalPrice}</span>
        </>
    )
}