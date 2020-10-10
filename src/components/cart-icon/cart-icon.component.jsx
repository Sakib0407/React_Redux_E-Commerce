import React from 'react'
import { ReactComponent as ShoppingCart} from '../../assets/shopping-bag.svg'
import './cart-icon.style.scss'
import { setCartHidden } from '../../redux/cartReducer/cartAction'
import { useDispatch, useSelector } from 'react-redux'


const CartIcon = () => {
    const dispatch = useDispatch()
    const cartItem =  useSelector(state => state.cart.cartItems)
    const price =  cartItem.reduce((a , cartItem) => a + cartItem.quantity , 0)
    return (
        <div className='cart-icon' onClick={() => dispatch(setCartHidden())}>
          <ShoppingCart className='shopping-icon' />
          <span className='item-count'>{price}</span>            
        </div>
    )
}

export default CartIcon
