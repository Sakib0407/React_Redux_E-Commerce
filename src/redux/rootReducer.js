import {combineReducers} from 'redux'
import { userReducer } from './userReducer/userReducer'
import { cartReducer } from './cartReducer/cartReducer'
import { persistReducer } from 'redux-persist'
import  storage  from 'redux-persist/lib/storage'
import { collectionReducer } from './collectionReducer/collectionReducer'

const persistCOnfig = {
    key: 'root',
    storage,
    whitelists: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    collection: collectionReducer
})
export default persistReducer(persistCOnfig, rootReducer)