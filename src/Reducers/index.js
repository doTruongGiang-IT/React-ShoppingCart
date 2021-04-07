import {combineReducers} from 'redux';
import Products from './Products';
import Cart from './Cart';
import Message from './Message';

const appReducers = combineReducers({
    products: Products,
    cart: Cart,
    message: Message
});

export default appReducers;
