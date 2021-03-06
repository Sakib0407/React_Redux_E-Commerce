import React from 'react';
import './collection-item.style.scss';
import CustomButton from '../custom-button/custom-button.component'
import { useDispatch } from 'react-redux'
import { cartItems } from '../../redux/cartReducer/cartAction'

const CollectionItem = ( {item, category }) =>{
  const dispatch = useDispatch()
  
  const { name, price, imageUrl} = item
  return(
      <div className={`${category ? 'category' : 'collection-item'}`}>

      <img
      className='image'
     src={imageUrl} />
      <div className='collection-footer'>
      <span className='name'>{name}</span>
          
      <span className='price'>${price}</span>
      
    </div>
    <CustomButton onClick={() => dispatch(cartItems(item))} className='custom-button'inverted>add to cart</CustomButton>
    </div>
  
 
);
    }
export default CollectionItem;