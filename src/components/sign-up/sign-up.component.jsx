  
import React,{useState} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.util';

import './sign-up.styles.scss';

const SignUp = () =>  {

 

    const [state, setState] = useState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
    )
    const handleChange = (e) =>{
      
      const value = e.target.value
      
      setState({ ...state,
        [e.target.name]: value })

    }
const handleSubmit = async(e) =>{
  e.preventDefault()
  const { displayName, email, password, confirmPassword } = state;

  if (password !== confirmPassword) {
    alert("passwords don't match");
    return;
  }

  try {
    const { user } = await auth.createUserWithEmailAndPassword(
      email,
      password
    );

    await createUserProfileDocument(user, { displayName });

  } catch (error) {
    console.error(error);
  }
  setState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
}
  
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={state.displayName}
            handleChange={(handleChange)}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={state.email}
            handleChange={(handleChange)}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={state.password}
            handleChange={(handleChange)}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={state.confirmPassword}
            handleChange={(handleChange)}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    )
  
    }

export default SignUp;