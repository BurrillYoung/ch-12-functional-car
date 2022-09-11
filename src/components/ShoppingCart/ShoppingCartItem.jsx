import React, { Component } from "react";
import { connect } from 'react-redux';
import {ON_DELETE_CART_ITEM} from '../../redux/types';

class ShoppingCartItem extends Component {
  render() {
    const {dispatch} = this.props;
    return (
      <>
        <p>{this.props.item.details.title}</p>
        <button onClick={() => dispatch({type:ON_DELETE_CART_ITEM,payload:this.props.item.id})}>
          Delete
        </button>
      </>
    );
  }
}

export default connect()(ShoppingCartItem);
