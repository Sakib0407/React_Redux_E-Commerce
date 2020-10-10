import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.util'
import { useSelector } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/CartDropdown'


import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';


const Header = ({ hidden }) => {
  
  const currentUser = useSelector( state =>  state)
  
  console.log(currentUser.user.currentUser)
  return(
    <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser.user.currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
      { currentUser.cart.hidden ? <CartDropdown /> : null  }
  </div>
);
      }
export default Header;