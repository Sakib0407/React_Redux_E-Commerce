import React,{useEffect} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch , useSelector} from 'react-redux'
import { setCurrentUser } from './redux/userReducer/userAction'
import Checkout from './pages/checkout/Checkout'
 

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx';
import  SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth , createUserProfileDocument } from './firebase/firebase.util'


const App = () =>{ 

    const currentUser =useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {
      auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
  
          userRef.onSnapshot(snapShot => {
           dispatch(setCurrentUser({
               
                id: snapShot.id,
                ...snapShot.data()
              }
            )
          )})
            }
            dispatch(setCurrentUser(userAuth))
      });
      
    },[])
   
  return (
    <div>
    <Header  />

      <Switch>
        <Route exact path='/'> <HomePage /></Route> 
        <Route path='/shop' > <ShopPage /></Route> 
        <Route exact path='/checkout' > <Checkout /></Route> 
        <Route path='/signin' >
  {currentUser.user.currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage /> }</Route> 
      </Switch>
    </div>
  );
}


export default App;