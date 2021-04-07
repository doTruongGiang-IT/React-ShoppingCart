import React, { Component } from 'react';
import {connect} from 'react-redux';
import Products from '../Components/Products';
import Product from '../Components/Product';
import PropTypes from 'prop-types';
import * as actions from '../Actions/index';

class ProductsContainer extends Component {
	render() {
		let {products, addToCart, changeMessage} = this.props;
        let listProducts = products.map( (product, index) => {
			return <Product key={product.id} product={product} onAddToCart={addToCart} changeMessage={changeMessage} />
		} );

		return (
			<Products>
                {listProducts}
            </Products>
		);	
	};
};

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired
        })
    ).isRequired,
    changeMessage: PropTypes.func.isRequired
};

const mapStateToProps = state => {
	return {
		products: state.products
	};
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        addToCart: (product) => {
            dispatch(actions.addToCart(product, 1));
        },
        changeMessage: message => {
            dispatch(actions.changeMessage(message));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);