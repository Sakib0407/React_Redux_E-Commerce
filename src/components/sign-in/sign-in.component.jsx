import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'
import { auth, signUpWithGoogle } from '../../firebase/firebase.util'


import './sign-in.style.scss';

const SignIn =() =>  {
  
  
  const [state, setState] = React.useState({
      email: '',
      password: ''
    }
  )

const  handleSubmit = async event => {
    event.preventDefault()
    
    const { email , password} = state
    if(email !== ''){

    try{
       await auth.signInWithEmailAndPassword(email , password)
       
       
      
    }catch( error)
    {
      console.log(error)
      alert('Email and password does not matched')
    }
    }
    
  };
  const handleChange = (e) =>{
      
    const value = e.target.value
    
    setState({ ...state,
      [e.target.name]: value })

  }
 
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={state.email}
            handleChange={handleChange}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={state.password}
            handleChange={handleChange}
            label='password'
            required
          />
            <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signUpWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }

export default SignIn;