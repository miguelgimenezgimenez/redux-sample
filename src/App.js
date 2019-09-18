import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Home from "./Home"
import WishList from "./WishList"
import Basket from "./Basket"

function App() {
  const addToWish  = e =>{
    console.log(e);

  }
  return (
    <div className="App-header">
      <Router>
        <div className="link-container">
          <Link to="/">Home</Link>

          <Link to="/wishlist/">Wishlist</Link>

          <Link to="/basket/">Basket</Link>
        </div>
        <Route path="/" exact component={() => <Home  addToWish={addToWish} />} />
        <Route path="/wishlist/" component={WishList} />
        <Route path="/basket/" component={Basket} />
      </Router>
    </div>
  )
}

export default App
