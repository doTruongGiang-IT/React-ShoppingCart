import React, {Component} from 'react';
import Cart from '../Components/Cart';
import CartItem from '../Components/CartItem';
import CartResult from '../Components/CartResult';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../Actions/index';

class CartContainer extends Component {
	render() {
        let {cart, deleteCart, changeMessage, increaseItem, decreaseItem} = this.props;
        let cartList = cart.map( (cartItem, index) => {
            return <CartItem key={cartItem.product.id} cartItem={cartItem} 
                                deleteCart={deleteCart} increaseItem={increaseItem} 
                                decreaseItem={decreaseItem} changeMessage={changeMessage} />
        } );

		return (
			<Cart>
                {cartList}
                {this.totalPrice(cart)}
            </Cart>
		);
	};

    totalPrice = cart => {
        let result = '';
        if(cart.length > 0) {
            result = <CartResult cart={cart} />
        };
        return result;
    };

};

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired                  
            }).isRequired,
            qty: PropTypes.number.isRequired          
        })
    ).isRequired
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        addToCart: (product, qty) => {
            dispatch(actions.addToCart(product, qty));         
        },
        deleteCart: id => {
            dispatch(actions.deleteFromCart(id));
        },
        increaseItem: id => {
            dispatch(actions.increaseItem(id));
        },
        decreaseItem: id => {
            dispatch(actions.decreaseItem(id));
        },
        changeMessage: message => {
            dispatch(actions.changeMessage(message));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
