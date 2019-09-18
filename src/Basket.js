import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default class Basket extends Component {
	removeFromBasket = (product) => {};

	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				<h1>Basket</h1>

				{this.props.basket ||
					[].map((product) => (
						<div className="product-container" key={product}>
							<span style={{ marginRight: 30 }}>{product}</span>
							<Button
								onClick={() => this.removeFromBasket(product)}
								variant="contained"
								color="secondary"
							>
								Remove
							</Button>
						</div>
					))}
			</div>
		);
	}
}
