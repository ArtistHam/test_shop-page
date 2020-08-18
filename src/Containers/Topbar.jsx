/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import logo from "../Images/Logo.png";
import cart from "../Images/cart_inactive.svg";

import "../Stylesheets/Topbar.css";

class Topbar extends Component {
  state = {
    isCartOpen: false,
  }

  toggleCart = () => {
    const { state: { isCartOpen } } = this;
    this.setState({ isCartOpen: !isCartOpen });
  }

  render() {
    const { state: { isCartOpen } } = this;
    return (
      <div className="topbar">
        <img src={logo} alt="cite logo" />
        <div className="cart-icon-wrapper" onClick={this.toggleCart}>
          <img className="cart-icon" src={cart} alt="cart" />
          <div className="cart-products-counter">2</div>
        </div>
        { isCartOpen && (
        <div className="cart-wrapper">
          <div className="cart">
            <span className="cart-close" onClick={this.toggleCart} />
            <div className="items-list">
              <div className="item">
                <div className="item-miniature" />
                <div className="item-information">
                  <div className="cart-item-name">Рубашка на пуговицах</div>
                  <div className="counter-wrapper">
                    <button type="button" className="counter-btn">-</button>
                    1
                    <button type="button" className="counter-btn">+</button>
                  </div>
                  <div className="price">$320</div>
                </div>
              </div>
              <div className="item">
                <div className="item-miniature" />
                <div className="item-information">
                  <div className="cart-item-name">Кроссовки «Kaiwa» Y3 x Adidas</div>
                  <div className="counter-wrapper">
                    <button type="button" className="counter-btn">-</button>
                    2
                    <button type="button" className="counter-btn">+</button>
                  </div>
                  <div className="price">$240</div>
                </div>
              </div>
            </div>
            <div className="total">
              <div className="total-element">Итого</div>
              <div className="total-element">$800</div>
            </div>
            <button type="button" className="buy-btn">Купить</button>
          </div>
        </div>
        ) }
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {},
)(withRouter(Topbar));
