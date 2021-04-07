import * as types from '../Constants/ActionType';

let data = JSON.parse(localStorage.getItem('cart'));
let initialState = data ? data : [];

let findIndex = (cart, product) => {
    let index = -1;
    if(cart.length > 0) {
        for(let i in cart) {
            if(cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    };
    return index;
};

const Cart = (state = initialState, action) => {
    switch(action.type) {
        case types.ADD_TO_CART:
            let product = action.product;
            let indexAdd = findIndex(state, product);
            if(indexAdd !== -1) {
                state[indexAdd].qty++;
            }else {
                state.push({
                    product: action.product,
                    qty: action.qty
                });
            };
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        case types.DELETE_FROM_CART:
            let indexDelete = findIndex(state, action);
            if(indexDelete !== -1) {
                state.splice(indexDelete, 1);
            };
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        case types.INCREASE_ITEM:
            let indexIncrease = findIndex(state, action);
            if(indexIncrease !== -1) {
                state[indexIncrease].qty++;
            };
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        case types.DECREASE_ITEM:
            let indexDecrease = findIndex(state, action);
            if(indexDecrease !== -1) {
                state[indexDecrease].qty--;
                if(state[indexDecrease].qty === 0) {
                    state.splice(indexDecrease, 1);
                }
            };
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        default:
            return [...state];
    }
};

export default Cart;