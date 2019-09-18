import React, { Component } from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { Snackbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default class Home extends Component {
  state = {
    inputValue: "",
    presents: [],
    open:false
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
    this.setState({open:true})

  }



   handleClose=(event, reason)=> {
    if (reason === 'clickaway') {
      return;
    }

  this.setState({open:false})
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

      <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Added to WishList
          </span>}
          action={[
            <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
              UNDO
            </Button>,
            <IconButton
              key="close"
              aria-label="close"
              color="inherit"

              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    )
  }
}
