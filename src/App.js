import React, { Component } from "react";
import { connect } from 'react-redux';
import axios from "axios";
import Interface from "./components/Interface";
import {SET_API_DATA} from './redux/types';
import "./App.css";

class App extends Component {
  state = { shoppingCartItems: [] };

  async componentDidMount() {
    try {
      const result = await axios.get("https://fakestoreapi.com/products");
      this.props.dispatch({type:SET_API_DATA, payload:result.data})
    } catch (error) {
      console.log("API Error!");
    }
  }

  render() {
    const {products} = this.props;
    if (products) {
      return (
        <Interface />
      );
    }
    return <p>Loading...</p>;
  }
}

function mapStateToProps(state){
  return {
    products:state.products
  }
}
export default connect(mapStateToProps)(App);
