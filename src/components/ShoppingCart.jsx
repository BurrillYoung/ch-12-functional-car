import React, { Component } from "react";
import { processShoppingCart } from "../utils";
import ShoppingCartItem from "./ShoppingCart/ShoppingCartItem";
import {connect} from "react-redux";
import {ON_SCREEN_MODE} from '../redux/types';

class ShoppingCart extends Component {
  render() {
    const processedCart = processShoppingCart(
      this.props.products,
      this.props.shoppingCartItems
    );
      const {dispatch} = this.props;
    return (
      <>
        <button onClick={() => dispatch({type:ON_SCREEN_MODE,payload:0})}>
          View products
        </button>
        <h1>£{processedCart.cartTotal.toFixed(2)}</h1>
        {processedCart.shoppingCartItems.map((item) => (
          <ShoppingCartItem
            key={item.id}
            item={item}
          />
        ))}
      </>
    );
  }
}

export default connect()(ShoppingCart);
