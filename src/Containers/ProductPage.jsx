/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { connect } from "react-redux";

import "../App.css";

class ProductPage extends Component {
  render() {
    return (
      <div>ПРОДУКТ</div>
    );
  }
}

// eslint-disable-next-line no-unused-vars
const mapStateToProps = state => ({});

export default connect(mapStateToProps, {})(ProductPage);
