import React from 'react'
import './CartDropdown.scss'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cartItem'
import { useSelector,useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { setCartHidden } from '../../redux/cartReducer/cartAction'
const CartDropdown = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const item = useSelector(state => state.cart.cartItems)

    return (
        <div className ='cart-dropdown' >
            <div className ='cart-items'>
                {
                    item.length ?
              (item.map(item => <CartItem key={item.id} item={item} />)) :
              <span className= 'empty'>Your cart is empty</span>
                }           
              </div>git commit
            <CustomButton onClick={() =>{ 
                history.push('/checkout')
                dispatch(setCartHidden())
                }}>Go To Checkout</CustomButton>
            
        </div>
    )
}

export default CartDropdown
