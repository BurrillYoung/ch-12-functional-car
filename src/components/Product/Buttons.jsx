import React, { Component } from "react";
import { connect } from 'react-redux';
import {ON_BUY_NOW} from '../../redux/types';

class Buttons extends Component {
  render() {
    const { id, dispatch } = this.props;
    return <button onClick={ () => { dispatch({type:ON_BUY_NOW, payload:id})}}>Buy Now</button>;
  }
}

export default connect()(Buttons);
