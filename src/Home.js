import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Snackbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux';
import { addProduct } from './actions';

class Home extends Component {
	state = {
		inputValue: '',
		open: false
	};

	handleChange = (e) => {
		this.setState({ inputValue: e.target.value });
	};

	handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			this.props.addProduct(this.state.inputValue);
		}
	};
	addToBasket = (item) => {};
	addToWishList = (product) => {
		this.props.addProduct(product);
	};

	handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		this.setState({ open: false });
	};

	render() {
		const { products } = this.props;
		return (
			<div style={{ textAlign: 'center' }}>
				<h1>Home</h1>
				<TextField
					id="outlined-name"
					label="Insert Product "
					onKeyDown={this.handleKeyDown}
					value={this.state.inputValue}
					onChange={this.handleChange}
					margin="normal"
					variant="outlined"
				/>
				{products.map((product) => (
					<div className="product-container" key={product}>
						<span style={{ marginRight: 30, width: 290 }}>{product}</span>
						<Button
							onClick={() => this.addToWishList(product)}
							variant="contained"
							style={{ marginRight: 20 }}
							color="primary"
						>
							Add to WishList
						</Button>
						<Button onClick={this.addToBasket} variant="contained" color="secondary">
							Add to basket
						</Button>
					</div>
				))}
				<Snackbar
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left'
					}}
					open={this.state.open}
					autoHideDuration={6000}
					onClose={this.handleClose}
					ContentProps={{
						'aria-describedby': 'message-id'
					}}
					message={<span id="message-id">Added to WishList</span>}
					action={[
						<Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
							UNDO
						</Button>,
						<IconButton key="close" aria-label="close" color="inherit" onClick={this.handleClose}>
							<CloseIcon />
						</IconButton>
					]}
				/>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	products: state.products
});

const mapDispatchToProps = (dispatch) => ({
	addProduct: (product) => dispatch(addProduct(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
