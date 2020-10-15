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
    const user = useSelector(state => state.user.currentUser)
    const onClick = () =>{
        user ?  history.push('/checkout') :  history.push('/signin')
        dispatch(setCartHidden())

    }

    return (
        <div className ={`${item.length ? '' : 'height'} cart-dropdown`} >
            <div className ='cart-items'>
                {
                    item.length ?
              (item.map(item => <CartItem key={item.id} item={item} />)) :
              <span className= 'empty'>Your cart is empty</span>
                }           
              </div>
              {item.length ?  (
            <CustomButton onClick={onClick}>Go To Checkout</CustomButton>) : null}
        </div>
    )
}

export default CartDropdown
