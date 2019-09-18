
import React, { Component } from 'react'
import Button from "@material-ui/core/Button"

export default class Basket extends Component {
    render() {
        return (
            <div style={{ textAlign: "center" }}>
            <h1>Basket</h1>

            {this.props.basket||['prod'].map(product => (
                <div className="product-container" key={product}>
                    <span style={{ marginRight: 30, width: 290 }}>{product}</span>

                    <Button
                    onClick={this.addToBasket}
                    variant="contained"
                    color="secondary"
                    >
                        Remove
                    </Button>
                </div>
            ))}

            </div>
        )
    }
}
