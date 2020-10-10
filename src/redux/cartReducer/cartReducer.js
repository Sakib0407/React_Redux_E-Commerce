import { addItemToCart, removeItemFromCart } from './cardUtil'
const initialState ={

    hidden: false,
    cartItems: []
}

export const cartReducer = (state= initialState , action) =>{


    switch(action.type){

        case 'TOGGLE_CART_HIDDEN' :
            return{
                ...state,
                hidden: !state.hidden
            }
        case "ADD_CART_ITEMS" :
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
            case "DECREASE_CART_ITEMS" :
            return{
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case 'DELETE_CART_ITEMS' :
            
            return{
                ...state,
                cartItems: state.cartItems.filter( item =>  item.id !== action.payload.id)
            }
            default :
            return state
    }
}