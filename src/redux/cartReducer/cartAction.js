export const setCartHidden = () =>({

    type: 'TOGGLE_CART_HIDDEN'
}
)

export const cartItems = item =>({
    type: "ADD_CART_ITEMS",
    payload: item
})
export const deletecartItems = item =>({
    type: "DELETE_CART_ITEMS",
    payload: item
})