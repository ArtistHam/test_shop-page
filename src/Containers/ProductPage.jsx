/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import routes from "../Helpers/routes";
import "../Stylesheets/ProductPage.css";
import tick from "../Images/dropdown-off.svg";
import { getProduct } from "../Actions/products.action";

class ProductPage extends Component {
  componentDidMount() {
    const {
      props: {
        getProduct,
        match: {
          params: {
            id,
          },
        },
      },
    } = this;
    getProduct(id);
  }

  goToRoot = () => {
    const {
      props: {
        history: { push },
      },
    } = this;
    push(routes.root);
  };

  render() {
    const { props: { product } } = this;
    return (
      <div className="product-page">
        <img alt="goods" src={product.image} className="item-preview" />
        <div className="product-information">
          <button type="button" onClick={this.goToRoot} className="back-btn">
            <img className="back-symbol" alt="Back" src={tick} />
            НАЗАД
          </button>
          <div className="product-category">{product ? product.category : "категория"}</div>
          <div className="product-name">{product ? product.name : "Название артикула"}</div>
          <div className="action-wrapper">
            <div className="size-chooser">
              Размер
              <img alt="back" src={tick} />
            </div>
            <button type="button" className="add-to-cart-btn">
              В КОРЗИНУ
            </button>
          </div>
          <div className="product-description-wrapper">
            <article className="product-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              molestias explicabo esse, iusto illum veniam eos sed? Non placeat
              corrupti soluta dolorem! Dicta incidunt a minima.
              <br />
              <br />
              <br />
              Lorem ipsum dolor sit amet.
              <br />
              <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
              velit blanditiis qui?
            </article>
            <div className="product-specification">
              <div className="product-specification-properties">
                <p>Цвет:</p>
                <p>Состав:</p>
                <p>Уход:</p>
                <p>Артикул:</p>
              </div>
              <div className="product-specification-values">
                <p>{product ? product.color : "Цвет изделия"}</p>
                <p>{product ? product.fabric : "Состав изделия"}</p>
                <p>{product ? product.care : "Уход за изделием"}</p>
                <p>{product ? product.art : "Артикул"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  product: state.ProductList.setProductReducer,
});

export default connect(mapStateToProps, {
  getProduct,
})(withRouter(ProductPage));
