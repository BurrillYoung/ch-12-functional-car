import React, { Component } from "react";
import Product from "./Product";
import ShoppingCart from "./ShoppingCart";
import {connect} from "react-redux";
import { ON_SCREEN_MODE, ON_SEARCH } from '../redux/types';

class Interface extends Component {
  render() {
    const { products,  shoppingCartItems, dispatch, onScreenMode, filtered} =this.props;
    const results = filtered.length > 0 ? filtered : products;

    return onScreenMode === 0 ? (
      <>
        <button onClick={ () =>{
          dispatch({type:ON_SCREEN_MODE, payload: 1 })
          }
        }>View shopping cart</button>
        <input
          type="text"
          onInput={(e) => {
            dispatch({ type:ON_SEARCH, payload: e.target.value });
          }}
        />
        {results.map((product) => (
          <Product
            key={product.id}
            product={product}
          />
        ))}
      </>
    ) : (
      <ShoppingCart
        products={products}
        shoppingCartItems={shoppingCartItems}
      />
    );
  }
}

function mapStateToProps(state){
  return {
    onScreenMode:state.onScreenMode,
    filtered:state.filtered,
    products:state.products,
    shoppingCartItems:state.shoppingCartItems
  }
}

export default connect(mapStateToProps)(Interface);
