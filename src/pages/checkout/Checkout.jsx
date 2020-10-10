import React from 'react'
import { useSelector } from 'react-redux'
import CheckoutItem from '../../components/checkout/checkoutItem'
import './Checkout.scss'

const Checkout = () => {
    const item = useSelector(state => state.cart.cartItems)
    const total =  item.reduce((a , item) => (a + item.price ) * item.quantity, 0)
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
      </div>
    )
}

export default Checkout
