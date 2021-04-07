import * as types from '../Constants/ActionType';

export const addToCart = (product, qty) => {
    return {
        type: types.ADD_TO_CART,
        product,
        qty
    };
};

export const deleteFromCart = id => {
    return {
        type: types.DELETE_FROM_CART,
        id
    };
};

export const increaseItem = id => {
    return {
        type: types.INCREASE_ITEM,
        id
    }
};

export const decreaseItem = id => {
    return {
        type: types.DECREASE_ITEM,
        id
    }
};

export const changeMessage = message => {
    return {
        type: types.CHANGE_MESSAGE,
        message
    };
};