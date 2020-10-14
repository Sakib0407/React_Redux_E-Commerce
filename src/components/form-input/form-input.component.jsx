import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label,type,  value, name }) => {

  

  return(
  <div className='group'>
    <input className='form-input'  type={type} onChange={handleChange} name={name}/>
    {label ? (
    <label
    className={`${
    value.length  ? 'shrink' : ''
    } form-input-label`}
  >
        {label}
      </label>
    ) : null}
  </div>
);
  }
export default FormInput;