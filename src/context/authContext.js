import React from 'react'


export const Auth = React.createContext()
const initialState = {
    user:{}
}

export const AuthProvider = ( {children} ) =>{

   
    return(
        <Auth.Provider >
            {children}
        </Auth.Provider>
    )



}