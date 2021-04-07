import React, { Component } from 'react';

class CartResult extends Component {
	render() {
		let {cart} = this.props;

		return (
			<tr>
				<td colSpan="3"></td>
				<td>
					<h4>
						<strong>Tổng Tiền</strong>
					</h4>
				</td>
				<td>
					<h4>
						<strong>{this.totalPrice(cart)}$</strong>
					</h4>
				</td>
				<td colSpan="3">
					<button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
						<i className="fa fa-angle-right right"></i>
					</button>
				</td>
			</tr>
		);
	};

	totalPrice = cart => {
		let total = 0;
		if(cart.length > 0) {
			cart.forEach(item => {
				return total += item.product.price * item.qty;
			});
		};
		return total;
	};

}

export default CartResult;
