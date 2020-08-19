/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import logo from "../Images/Logo.png";
import cart from "../Images/cart_inactive.svg";
import { setCartItem } from "../Actions/cart.action";

import "../Stylesheets/Topbar.css";

class Topbar extends Component {
  state = {
    isCartOpen: false,
  }

  toggleCart = () => {
    const { state: { isCartOpen } } = this;
    this.setState({ isCartOpen: !isCartOpen });
  }

  decreaseItemCount = id => () => {
    const {
      props: {
        setCartItem,
        cartItems,
      },
    } = this;
    const item = cartItems.find(item => item.id === id);
    setCartItem({ id, count: item.count - 1 });
  };

  increaseItemCount = id => () => {
    const {
      props: {
        setCartItem,
        cartItems,
      },
    } = this;
    const item = cartItems.find(item => item.id === id);
    setCartItem({ id, count: item.count + 1 });
  };

  hireDeveloper = () => {
    window.location.replace("https://www.linkedin.com/in/kashapovvas/");
  }

  render() {
    const {
      state: {
        isCartOpen,
      },
      props: {
        cartItems,
      },
    } = this;
    const total = cartItems.reduce((sum, current) => +sum + (+current.price.replace(/\$/, "") * current.count), 0);
    return (
      <div className="topbar">
        <img src={logo} alt="cite logo" />
        <div className="cart-icon-wrapper" onClick={this.toggleCart}>
          <img className="cart-icon" src={cart} alt="cart" />
          {cartItems.length > 0 && <div className="cart-products-counter">{cartItems.length}</div>}
        </div>
        { isCartOpen && (
        <div className="cart-wrapper">
          <div className="cart">
            <span className="cart-close" onClick={this.toggleCart} />
            <div className="items-list">
              {cartItems.length ? cartItems.map(item => (
                <div className="item">
                  <div style={{ backgroundImage: `url(${item.image})` }} className="item-miniature" />
                  <div className="item-information">
                    <div className="cart-item-name">{item.name}</div>
                    <div className="counter-wrapper">
                      <button type="button" className="counter-btn" onClick={this.decreaseItemCount(item.id)}>-</button>
                      {item.count}
                      <button type="button" className="counter-btn" onClick={this.increaseItemCount(item.id)}>+</button>
                    </div>
                    <div className="price">{item.price}</div>
                  </div>
                </div>
              )) : <div className="empty-cart-text">The cart is empty </div>}
            </div>
            <div className="total">
              <div className="total-element">Итого</div>
              <div className="total-element">{`$${total}`}</div>
            </div>
            <button type="button" className="buy-btn" onClick={this.hireDeveloper}>Купить</button>
          </div>
        </div>
        ) }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cartItems: state.Cart,
});

export default connect(
  mapStateToProps,
  {
    setCartItem,
  },
)(withRouter(Topbar));
