import React from 'react';
import { useSelector } from 'react-redux'

import MenuItem from '../menu-items/menu-item.component';

import './directory.styles.scss';

 const Directory = () =>{
   const state = useSelector(state => state.collection)
   

  

    return (
      <div className='directory-menu'>
        {state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );

        }
export default Directory;