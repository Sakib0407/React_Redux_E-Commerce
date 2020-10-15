import React from 'react'
import { useSelector } from 'react-redux'
import CheckoutItem from '../../components/checkout/checkoutItem'
import StripeCheckoutButton from '../../components/stripe/StripeCheckoutButton'
import './Checkout.scss'
import { useHistory } from 'react-router-dom'
const Checkout = () => {
    const item = useSelector(state => state.cart.cartItems)
    const history = useHistory()
    
    const total =  item.reduce((a , item) => (a + item.price ) * item.quantity, 0)
    if( item.length == 0 ){
      setTimeout(() =>{
        history.push('/shop')
      }, 200)
    }

    return (
        <div className='checkout-page'>
        <div className='checkout-header'>
          <div className='header-block'>
            <span>Product</span>
          </div>
          <div className='header-block'>
            <span>Description</span>
          </div>
          <div className='header-block'>
            <span>Quantity</span>
          </div>
          <div className='header-block'>
            <span>Price</span>
          </div>
          <div className='header-block'>
            <span>Remove</span>
          </div>
        </div>
        {item.map(cartItem => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className='total'>TOTAL: ${total}</div>
        <div className='stripe'>          
        <StripeCheckoutButton  price={total} />
        </div>
      </div>
    )
}

export default Checkout
