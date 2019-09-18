import React, { Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import WishList from './WishList';
import Basket from './Basket';

export default class App extends Component {

	render() {
		return (
			<div className="App-header">
				<Router>
					<div className="link-container">
						<Link to="/">Home</Link>

						<Link to="/wishlist/">Wishlist</Link>

						<Link to="/basket/">Basket</Link>
					</div>
					<Route path="/" exact component={Home} />
					<Route path="/wishlist/" component={WishList} />
					<Route path="/basket/" component={Basket} />
				</Router>
			</div>
		);
	}
}
