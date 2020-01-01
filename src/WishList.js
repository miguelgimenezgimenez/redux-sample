import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

class Wishlist extends Component {
	removeFromWishlist = (product) => {};

	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				<h1>Wishlist</h1>

				{this.props.products.map((product) => (
					<div className="product-container" key={product}>
						<span style={{ marginRight: 30 }}>{product}</span>
						<Button onClick={() => this.removeFromWishlist(product)} variant="contained" color="secondary">
							Remove
						</Button>
					</div>
				))}
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	products: state.products
});
export default connect(mapStateToProps)(Wishlist);
