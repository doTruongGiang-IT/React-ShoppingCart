import React, {Component} from 'react';
import * as message from '../Constants/Message';

class CartItem extends Component {
	render() {
		let {cartItem} = this.props;

		return (
			<tr>
				<th scope="row">
					<img src={cartItem.product.image} alt={cartItem.product.name} className="img-fluid z-depth-0" />
				</th>
				<td>
					<h5>
						<strong>{cartItem.product.name}</strong>
					</h5>
				</td>
				<td>{cartItem.product.price}$</td>
				<td className="center-on-small-only">
					<span className="qty">{cartItem.qty}</span>
					<div className="btn-group radio-group" data-toggle="buttons">
						<label onClick={() => this.decreaseQty(cartItem.product.id)} className="btn btn-sm btn-primary
							btn-rounded waves-effect waves-light">
							<a>—</a>
						</label>
						<label onClick={() => this.increaseQty(cartItem.product.id)} className="btn btn-sm btn-primary
							btn-rounded waves-effect waves-light">
							<a>+</a>
						</label>
					</div>
				</td>
				<td>{cartItem.product.price * cartItem.qty}$</td>
				<td>
					<button onClick={() => this.deleteItem(cartItem.product.id)} type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
						title="" data-original-title="Remove item">
						X
					</button>
				</td>
			</tr>
		);
	};

	increaseQty = (id) => {
		this.props.increaseItem(id);
		this.props.changeMessage(message.MSG_UPDATE_SUCCESS);
	};

	decreaseQty = (id) => {
		this.props.decreaseItem(id);
		this.props.changeMessage(message.MSG_UPDATE_SUCCESS);
	};

	deleteItem = (id) => {
		this.props.deleteCart(id);
		this.props.changeMessage(message.MSG_DELETE_SUCCESS);
	};
}

export default CartItem;
