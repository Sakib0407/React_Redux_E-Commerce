import React from 'react';
import {deletecartItems} from '../../redux/cartReducer/cartAction'
import {useDispatch} from 'react-redux'
import './checkout.scss';

const CheckoutItem = ({ cartItem }) => {
   const { name, imageUrl, price, quantity } = cartItem
  const dispatch = useDispatch()
  return(
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item' />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>{quantity}</span>
    <span className='price'>{price}</span>
    <div className='remove-button' onClick={() => dispatch(deletecartItems(cartItem))}>&#10005;</div>
  </div>
);
}
export default CheckoutItem;