import React, { Component } from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

export default class Home extends Component {
  state = {
    inputValue: "",
    presents: []
  }

  handleChange = e => {
    this.setState({ inputValue: e.target.value })
  }

  handleKeyDown = e => {
    if (e.key === "Enter") {
      this.setState({
        presents: [...this.state.presents, this.state.inputValue],
        inputValue: ""
      })
    }
  }
  addToBasket = item => {}
  addToWishList = item => {
    const { addToWish } = this.props
    addToWish(item)
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
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
        {this.state.presents.map(product => (
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
            <Button
              onClick={this.addToBasket}
              variant="contained"
              color="secondary"
            >
              Add to basket
            </Button>
          </div>
        ))}
      </div>
    )
  }
}
