import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

class Wishlist extends Component {


	render() {
		console.log(this.props.wishList)
		return (
			<div style={{ textAlign: 'center' }}>
				<h1>Wishlist</h1>

				{this.props.wishList.map((product) => (
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
const mapStateToProps = store => {

	return { wishList: store.products.wishList }
}
export default connect(mapStateToProps)(Wishlist);
